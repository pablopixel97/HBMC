/** 1 → "01". Numeración de servicios y fases, como en los PDFs de obra. */
export function dosDigitos(n: number): string {
  return String(n).padStart(2, '0');
}
