import { Claim, Clinician } from "../types/models";

export function findClaimById(claims: Claim[], claimId: string): Claim | null {
  const found = claims.find((claim) => claim.claimId === claimId);
  return found ?? null;
}

export function findClinicianById(
  clinicians: Clinician[],
  clinicianId: string
): Clinician | null {
  const found = clinicians.find((c) => c.clinicianId === clinicianId);
  return found ?? null;
}

export function binarySearchClaimById(
  sortedClaims: Claim[],
  targetId: string
): number {
  let low = 0;
  let high = sortedClaims.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midId = sortedClaims[mid].claimId;

    if (midId === targetId) {
      return mid;
    }

    if (midId.localeCompare(targetId) < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
