import {
  Claim,
  Appointment,
  Clinician,
  Location,
  CMEReport,
  CMEStatus,
} from "../types/models";

// ============================================================
// DENIAL RATE FUNCTIONS
// ============================================================

/**
 * Calculates overall denial rate as a percentage (0–100), rounded to 2 decimals.
 * Throws an error if the claims array is empty.
 */
export function calculateDenialRate(claims: Claim[]): number {
  if (claims.length === 0) {
    throw new Error("Cannot calculate denial rate for an empty claims array.");
  }

  const deniedCount = claims.filter((c) => c.status === "denied").length;
  const rate = (deniedCount / claims.length) * 100;
  return Math.round(rate * 100) / 100;
}

/**
 * Groups claims by payerName and calculates denial rate per payer.
 * Returns an object: { payerName: denialRatePercentage }
 */
export function denialRateByPayer(claims: Claim[]): Record<string, number> {
  const grouped = claims.reduce<Record<string, Claim[]>>((acc, claim) => {
    if (!acc[claim.payerName]) {
      acc[claim.payerName] = [];
    }
    acc[claim.payerName].push(claim);
    return acc;
  }, {});

  return Object.entries(grouped).reduce<Record<string, number>>(
    (result, [payer, payerClaims]) => {
      const denied = payerClaims.filter((c) => c.status === "denied").length;
      const rate = (denied / payerClaims.length) * 100;
      result[payer] = Math.round(rate * 100) / 100;
      return result;
    },
    {}
  );
}

/**
 * Groups claims by locationId and calculates denial rate per location.
 * Returns an object: { locationId: denialRatePercentage }
 */
export function denialRateByLocation(claims: Claim[]): Record<string, number> {
  const grouped = claims.reduce<Record<string, Claim[]>>((acc, claim) => {
    if (!acc[claim.locationId]) {
      acc[claim.locationId] = [];
    }
    acc[claim.locationId].push(claim);
    return acc;
  }, {});

  return Object.entries(grouped).reduce<Record<string, number>>(
    (result, [locationId, locationClaims]) => {
      const denied = locationClaims.filter((c) => c.status === "denied").length;
      const rate = (denied / locationClaims.length) * 100;
      result[locationId] = Math.round(rate * 100) / 100;
      return result;
    },
    {}
  );
}

/**
 * Returns payer names whose denial rate exceeds the given threshold.
 * Default threshold: 8 (HealthCore industry benchmark is 5–8%).
 */
export function flagHighDenialPayers(
  claims: Claim[],
  threshold: number = 8
): string[] {
  const ratesByPayer = denialRateByPayer(claims);

  return Object.entries(ratesByPayer)
    .filter(([, rate]) => rate > threshold)
    .map(([payer]) => payer);
}

// ============================================================
// NO-SHOW COST FUNCTIONS
// ============================================================

/**
 * Calculates estimated revenue lost from no-shows at a location
 * during the 7 calendar days ending on weekEndingDate (inclusive).
 * Returns USD amount rounded to 2 decimals.
 */
export function calculateNoShowCost(
  appointments: Appointment[],
  location: Location,
  weekEndingDate: string
): number {
  const endDate = new Date(weekEndingDate);
  const startDate = new Date(weekEndingDate);
  startDate.setDate(startDate.getDate() - 6);

  const totalCost = appointments
    .filter((apt) => {
      if (apt.status !== "no_show") return false;
      if (apt.locationId !== location.locationId) return false;
      const aptDate = new Date(apt.scheduledDate);
      return aptDate >= startDate && aptDate <= endDate;
    })
    .reduce((sum, apt) => {
      const fee = location.averageConsultationFee[apt.serviceType];
      return sum + fee;
    }, 0);

  return Math.round(totalCost * 100) / 100;
}

/**
 * Calculates no-show rate per location as a percentage.
 * Returns an object: { locationId: noShowRatePercentage }
 */
export function noShowRateByLocation(
  appointments: Appointment[]
): Record<string, number> {
  const grouped = appointments.reduce<Record<string, Appointment[]>>(
    (acc, apt) => {
      if (!acc[apt.locationId]) {
        acc[apt.locationId] = [];
      }
      acc[apt.locationId].push(apt);
      return acc;
    },
    {}
  );

  return Object.entries(grouped).reduce<Record<string, number>>(
    (result, [locationId, locationApts]) => {
      const noShows = locationApts.filter((a) => a.status === "no_show").length;
      const rate = (noShows / locationApts.length) * 100;
      result[locationId] = Math.round(rate * 100) / 100;
      return result;
    },
    {}
  );
}

/**
 * Returns locationIds whose no-show rate exceeds the given threshold.
 * Default threshold: 20 (HealthCore internal alert level).
 */
export function flagHighNoShowLocations(
  appointments: Appointment[],
  threshold: number = 20
): string[] {
  const ratesByLocation = noShowRateByLocation(appointments);

  return Object.entries(ratesByLocation)
    .filter(([, rate]) => rate > threshold)
    .map(([locationId]) => locationId);
}

// ============================================================
// CME COMPLIANCE FUNCTIONS
// ============================================================

/**
 * Generates a CME compliance report for each clinician as of the given date.
 */
export function generateCMEReport(
  clinicians: Clinician[],
  asOfDate: string
): CMEReport[] {
  const refDate = new Date(asOfDate);

  return clinicians.map((clinician) => {
    const {
      clinicianId,
      firstName,
      lastName,
      role,
      locationId,
      cmeHoursRequired,
      cmeHoursLogged,
      cmeYearStartDate,
      licenceExpiryDate,
    } = clinician;

    const fullName = `${firstName} ${lastName}`;
    const hoursRemaining = Math.max(0, cmeHoursRequired - cmeHoursLogged);

    const percentComplete =
      cmeHoursRequired > 0
        ? Math.round(((cmeHoursLogged / cmeHoursRequired) * 100) * 10) / 10
        : 100;

    const cycleStart = new Date(cmeYearStartDate);
    const cycleEnd = new Date(cmeYearStartDate);
    cycleEnd.setFullYear(cycleEnd.getFullYear() + 1);

    const daysRemainingInCycle = Math.max(
      0,
      Math.ceil(
        (cycleEnd.getTime() - refDate.getTime()) / (1000 * 60 * 60 * 24)
      )
    );

    const licenceExpiry = new Date(licenceExpiryDate);
    const licenceDaysRemaining = Math.ceil(
      (licenceExpiry.getTime() - refDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    const complianceStatus = determineComplianceStatus(
      cmeHoursLogged,
      cmeHoursRequired,
      cycleStart,
      cycleEnd,
      refDate
    );

    return {
      clinicianId,
      fullName,
      role,
      locationId,
      hoursRequired: cmeHoursRequired,
      hoursLogged: cmeHoursLogged,
      hoursRemaining,
      percentComplete,
      daysRemainingInCycle,
      complianceStatus,
      licenceExpiryDate,
      licenceDaysRemaining,
    };
  });
}

/**
 * Determines CME compliance status for a clinician.
 */
function determineComplianceStatus(
  hoursLogged: number,
  hoursRequired: number,
  cycleStart: Date,
  cycleEnd: Date,
  asOfDate: Date
): CMEStatus {
  if (hoursLogged >= hoursRequired) {
    return "complete";
  }

  if (asOfDate >= cycleEnd) {
    return "overdue";
  }

  const totalCycleDays = Math.ceil(
    (cycleEnd.getTime() - cycleStart.getTime()) / (1000 * 60 * 60 * 24)
  );
  const daysElapsed = Math.ceil(
    (asOfDate.getTime() - cycleStart.getTime()) / (1000 * 60 * 60 * 24)
  );
  const percentYearElapsed = (daysElapsed / totalCycleDays) * 100;
  const percentComplete =
    hoursRequired > 0 ? (hoursLogged / hoursRequired) * 100 : 100;

  if (percentYearElapsed - percentComplete > 15) {
    return "at_risk";
  }

  return "on_track";
}

/**
 * Returns clinicians whose complianceStatus is "at_risk" or "overdue".
 */
export function getCliniciansAtRisk(
  clinicians: Clinician[],
  asOfDate: string
): Clinician[] {
  const reports = generateCMEReport(clinicians, asOfDate);

  return clinicians.filter((clinician) => {
    const report = reports.find((r) => r.clinicianId === clinician.clinicianId);
    return (
      report?.complianceStatus === "at_risk" ||
      report?.complianceStatus === "overdue"
    );
  });
}

/**
 * Returns clinicians whose licence expires within daysThreshold days from asOfDate.
 */
export function getCliniciansWithExpiringLicences(
  clinicians: Clinician[],
  asOfDate: string,
  daysThreshold: number
): Clinician[] {
  const refDate = new Date(asOfDate);

  return clinicians.filter((clinician) => {
    const expiryDate = new Date(clinician.licenceExpiryDate);
    const daysRemaining = Math.ceil(
      (expiryDate.getTime() - refDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysRemaining >= 0 && daysRemaining <= daysThreshold;
  });
}
