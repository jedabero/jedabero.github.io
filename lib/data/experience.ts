export const startYear = 2015;

export function getExperienceYears(): number {
  const current = new Date().getFullYear();
  return current - startYear;
}
