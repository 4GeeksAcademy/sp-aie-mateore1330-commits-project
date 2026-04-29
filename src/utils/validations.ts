import { Claim, Clinician, ClinicianRole } from "../types/models";

const VALID_ROLES: ClinicianRole[] = [
  "physician",
  "nurse_practitioner",
  "nurse",
  "medical_assistant",
];

/**
 * Validates all business rules for a claim.
 * Returns { valid: true, errors: [] } if all rules pass.
 * Returns { valid: false, errors: [...] } with one message per failing rule.
 */
export function validateClaim(
  claim: Claim,
  knownLocationIds: string[],
  asOfDate: string
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (claim.claimAmount <= 0) {
    errors.push("claimAmount must be greater than 0.");
  }

  const submissionDate = new Date(claim.submissionDate);
  if (Number.isNaN(submissionDate.getTime())) {
    errors.push("submissionDate must be a valid ISO date.");
  } else {
    const referenceDate = new Date(asOfDate);
    if (Number.isNaN(referenceDate.getTime())) {
      errors.push("asOfDate must be a valid ISO date.");
    } else {
      referenceDate.setHours(23, 59, 59, 999);
      if (submissionDate > referenceDate) {
        errors.push("submissionDate must not be a future date.");
      }
    }
  }

  if (!knownLocationIds.includes(claim.locationId)) {
    errors.push("locationId must match a known clinic ID.");
  }

  if (claim.status === "denied" && !claim.denialReason) {
    errors.push("denialReason must be present when status is 'denied'.");
  }

  const patientIdRegex = /^HC-[A-Za-z0-9]{6}$/;
  if (!patientIdRegex.test(claim.patientId)) {
    errors.push(
      "patientId must match format 'HC-' followed by 6 alphanumeric characters."
    );
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validates all business rules for a clinician record.
 * Returns { valid: true, errors: [] } if all rules pass.
 */
export function validateClinician(
  clinician: Clinician
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (clinician.cmeHoursRequired < 0) {
    errors.push("cmeHoursRequired must be greater than or equal to 0.");
  }

  if (clinician.cmeHoursLogged < 0) {
    errors.push("cmeHoursLogged must be greater than or equal to 0.");
  }

  const expiryDate = new Date(clinician.licenceExpiryDate);
  if (isNaN(expiryDate.getTime())) {
    errors.push("licenceExpiryDate must be a valid date.");
  }

  if (!VALID_ROLES.includes(clinician.role)) {
    errors.push(
      "role must be one of: physician, nurse_practitioner, nurse, medical_assistant."
    );
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Returns true if rate exceeds threshold.
 * Default threshold: 8 (HealthCore billing denial benchmark).
 */
export function isDenialRateAboveThreshold(
  rate: number,
  threshold: number = 8
): boolean {
  return rate > threshold;
}

/**
 * Returns true if rate exceeds threshold.
 * Default threshold: 20 (HealthCore internal no-show alert level).
 */
export function isNoShowRateAboveThreshold(
  rate: number,
  threshold: number = 20
): boolean {
  return rate > threshold;
}
