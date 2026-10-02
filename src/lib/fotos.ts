import type { ImageMetadata } from 'astro';

// Fotos de obra extraídas de los PDFs con scripts/extraer-fotos.py (nombre = página del PDF: p27.jpg, p12-a.jpg…)
// y fotos generales del sitio, que no pertenecen a una obra, en src/assets/sitio/.
const fotos = import.meta.glob<ImageMetadata>(['../assets/obras/*/*.jpg', '../assets/sitio/*.jpg'], {
  eager: true,
  import: 'default',
});

/**
 * Foto de obra en src/assets/obras/ ("quirilluca/p02.jpg") o general en src/assets/ ("sitio/equipo.jpg").
 * Si no existe, el build falla.
 */
export function imagen(archivo: string): ImageMetadata {
  const foto = fotos[`../assets/obras/${archivo}`] ?? fotos[`../assets/${archivo}`];
  if (!foto) {
    throw new Error(`No existe la foto ${archivo} en src/assets/obras/ ni en src/assets/sitio/`);
  }
  return foto;
}
