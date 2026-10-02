// Íconos del sitio (pestaña, favicon.ico, pantalla de inicio del iPhone), armados en el build desde
// los vectores del isotipo: las letras en crema sobre un cuadrado grafito, como el logo del nav.
import sharp from 'sharp';
import { cajaIsotipo, letrasIsotipo } from '../data/isotipo';

// Los mismos valores que --color-grafito y --color-crema de styles/tokens.css.
const GRAFITO = '#22282d';
const CREMA = '#f3f0e8';

interface Formato {
  /** Espacio libre a cada lado del isotipo, en % del lado. */
  margen: number;
  /** Radio de las esquinas, en % del lado. */
  radio: number;
}

/** Pestaña del navegador: el isotipo lo más grande posible, porque a 16 px las letras se funden. */
export const PESTANA: Formato = { margen: 14, radio: 18 };
/** iPhone: recorta las esquinas por su cuenta y deja el ícono junto a otros con más aire. */
export const IPHONE: Formato = { margen: 22, radio: 0 };

/** SVG de 100 × 100 con el isotipo centrado. */
export function svgIcono({ margen, radio }: Formato): string {
  const { x, y, ancho, alto } = cajaIsotipo;
  const escala = (100 - 2 * margen) / Math.max(ancho, alto);
  const dx = (100 - ancho * escala) / 2;
  const dy = (100 - alto * escala) / 2;
  const letras = letrasIsotipo.map(({ d, transform }) => `<path d="${d}" transform="${transform}"/>`).join('');
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">` +
    `<rect width="100" height="100" rx="${radio}" fill="${GRAFITO}"/>` +
    `<g fill="${CREMA}" transform="translate(${dx} ${dy}) scale(${escala}) translate(${-x} ${-y})">${letras}</g>` +
    `</svg>`
  );
}

/** PNG cuadrado de `lado` px. */
export async function pngIcono(lado: number, formato: Formato): Promise<Uint8Array<ArrayBuffer>> {
  // El SVG mide 100 unidades: la densidad lo rasteriza directo al tamaño final, sin reescalar.
  const svg = new TextEncoder().encode(svgIcono(formato));
  const png = await sharp(svg, { density: (72 * lado) / 100 }).resize(lado, lado).png().toBuffer();
  return new Uint8Array(png);
}

/** favicon.ico con varios tamaños; cada imagen va en PNG, que el formato ICO admite desde Windows Vista. */
export async function icoIcono(lados: readonly number[], formato: Formato): Promise<Uint8Array<ArrayBuffer>> {
  const imagenes = await Promise.all(lados.map((lado) => pngIcono(lado, formato)));
  const largoCabecera = 6 + 16 * lados.length;
  const ico = new Uint8Array(largoCabecera + imagenes.reduce((total, png) => total + png.length, 0));
  const vista = new DataView(ico.buffer);
  vista.setUint16(0, 0, true); // reservado
  vista.setUint16(2, 1, true); // tipo: ícono
  vista.setUint16(4, lados.length, true);
  let desplazamiento = largoCabecera;
  imagenes.forEach((png, i) => {
    const entrada = 6 + 16 * i;
    const lado = lados[i] ?? 0;
    vista.setUint8(entrada, lado >= 256 ? 0 : lado); // ancho (0 = 256)
    vista.setUint8(entrada + 1, lado >= 256 ? 0 : lado); // alto
    vista.setUint8(entrada + 2, 0); // colores de paleta
    vista.setUint8(entrada + 3, 0); // reservado
    vista.setUint16(entrada + 4, 1, true); // planos
    vista.setUint16(entrada + 6, 32, true); // bits por píxel
    vista.setUint32(entrada + 8, png.length, true);
    vista.setUint32(entrada + 12, desplazamiento, true);
    ico.set(png, desplazamiento);
    desplazamiento += png.length;
  });
  return ico;
}
