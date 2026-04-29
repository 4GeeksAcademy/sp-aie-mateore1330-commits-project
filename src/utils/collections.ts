import {
  Claim,
  Appointment,
  AppointmentStatus,
} from "../types/models";

export function filterClaims(
  claims: Claim[],
  filters: Partial<Pick<Claim, "locationId" | "status" | "payerName" | "serviceType">>
): Claim[] {
  return claims.filter((claim) => {
    if (filters.locationId !== undefined && claim.locationId !== filters.locationId) {
      return false;
    }
    if (filters.status !== undefined && claim.status !== filters.status) {
      return false;
    }
    if (filters.payerName !== undefined && claim.payerName !== filters.payerName) {
      return false;
    }
    if (filters.serviceType !== undefined && claim.serviceType !== filters.serviceType) {
      return false;
    }
    return true;
  });
}

export function filterAppointmentsByStatus(
  appointments: Appointment[],
  status: AppointmentStatus[]
): Appointment[] {
  return appointments.filter((apt) => status.includes(apt.status));
}

export function sortClaimsById(
  claims: Claim[],
  direction: "asc" | "desc"
): Claim[] {
  return [...claims].sort((a, b) => {
    const comparison = a.claimId.localeCompare(b.claimId);
    return direction === "asc" ? comparison : -comparison;
  });
}

export function sortAppointmentsByDate(
  appointments: Appointment[],
  direction: "asc" | "desc"
): Appointment[] {
  return [...appointments].sort((a, b) => {
    const comparison = a.scheduledDate.localeCompare(b.scheduledDate);
    return direction === "asc" ? comparison : -comparison;
  });
}

export function groupClaimsBy(
  claims: Claim[],
  key: "locationId" | "payerName" | "status" | "serviceType"
): Record<string, Claim[]> {
  return claims.reduce<Record<string, Claim[]>>((groups, claim) => {
    const groupKey = claim[key];
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(claim);
    return groups;
  }, {});
}
