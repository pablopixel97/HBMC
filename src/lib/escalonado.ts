/**
 * Reparte un tramo de scroll entre n elementos como un stagger de GSAP con scrub: cada uno dura
 * `duracion` y empieza `paso` después del anterior, y el conjunto se estira para ocupar el tramo
 * completo. Devuelve las variables --a y --b (en %) que usa animation-range.
 */
export function escalonar(
  k: number,
  n: number,
  [inicio, fin]: readonly [number, number],
  paso: number,
  duracion = 0.5,
): string {
  const total = duracion + paso * (n - 1);
  const a = inicio + ((fin - inicio) * paso * k) / total;
  const b = a + ((fin - inicio) * duracion) / total;
  return `--a: ${a.toFixed(2)}%; --b: ${b.toFixed(2)}%`;
}
