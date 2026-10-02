"""Extrae las fotos embebidas en los PDFs de obras, sin recomprimirlas.

Uso (desde la raíz del repo; requiere PyMuPDF: `pip install pymupdf`):

    python scripts/extraer-fotos.py [destino]      # destino por defecto: src/assets/obras

InDesign repite imágenes en páginas vecinas (desbordadas o tapadas por marcos de recorte),
así que cada imagen se asigna a la página donde realmente se ve: se renderiza la página y
se cuentan los píxeles que coinciden con la imagen escalada a su posición.

Nombres: pNN.jpg, o pNN-a.jpg / pNN-b.jpg (de izquierda a derecha) si la página tiene varias
fotos. NN es el número de página del PDF. Sobrescribe archivos con el mismo nombre.
"""

import os
import sys

import pymupdf

PDFS = {
    'quirilluca': 'HBMC/sources/QUIRILLUCA.UNIFAMILIAR. HBMC..pdf',
    'maitencillo': 'HBMC/sources/MAITENCILLO.UNIFAMILIAR. HBMC.pdf',
    'fundaciones': 'HBMC/sources/FUNDACIONES. HBMC..pdf',
    'muro-perimetral': 'HBMC/sources/MURO.PERIMETRAL.HBMC.2026.pdf',
}
DPI = 24
ESCALA = DPI / 72
TOLERANCIA = 45  # suma máxima de diferencias RGB para considerar que un píxel coincide
AREA_MINIMA = 0.04  # fracción de la página que debe verse para contar la imagen


def a_rgb(pix: pymupdf.Pixmap) -> pymupdf.Pixmap:
    if pix.n - pix.alpha != 3:
        pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
    if pix.alpha:
        pix = pymupdf.Pixmap(pix, 0)
    return pix


def pixeles_visibles(pagina: pymupdf.Pixmap, imagen: pymupdf.Pixmap, bbox: pymupdf.Rect) -> int:
    """Cuenta los píxeles de la página que coinciden con la imagen dibujada en bbox."""
    x0, y0 = round(bbox.x0 * ESCALA), round(bbox.y0 * ESCALA)
    w, h = max(1, round(bbox.width * ESCALA)), max(1, round(bbox.height * ESCALA))
    escalada = pymupdf.Pixmap(imagen, w, h)
    ps, es = pagina.samples, escalada.samples
    ancho, alto = pagina.width, pagina.height
    coinciden = 0
    for y in range(max(0, y0), min(alto, y0 + h)):
        for x in range(max(0, x0), min(ancho, x0 + w)):
            p = (y * ancho + x) * 3
            i = ((y - y0) * w + (x - x0)) * 3
            if abs(ps[p] - es[i]) + abs(ps[p + 1] - es[i + 1]) + abs(ps[p + 2] - es[i + 2]) < TOLERANCIA:
                coinciden += 1
    return coinciden


def extraer(slug: str, ruta: str, destino: str) -> None:
    doc = pymupdf.open(ruta)
    imagenes = {}
    mejor = {}  # xref -> (píxeles visibles, página, x0)
    for page in doc:
        infos = page.get_image_info(xrefs=True)
        if not infos:
            continue
        render = page.get_pixmap(dpi=DPI, alpha=False)
        for info in infos:
            xref = info['xref']
            bbox = pymupdf.Rect(info['bbox'])
            if (bbox & page.rect).is_empty:
                continue
            if xref not in imagenes:
                imagenes[xref] = a_rgb(pymupdf.Pixmap(doc, xref))
            visibles = pixeles_visibles(render, imagenes[xref], bbox)
            if visibles > mejor.get(xref, (0,))[0]:
                mejor[xref] = (visibles, page.number + 1, max(bbox.x0, 0))

    minimo = AREA_MINIMA * (doc[0].rect.width * ESCALA) * (doc[0].rect.height * ESCALA)
    por_pagina: dict[int, list[tuple[float, int]]] = {}
    for xref, (visibles, pagina, x0) in mejor.items():
        if visibles >= minimo:
            por_pagina.setdefault(pagina, []).append((x0, xref))

    carpeta = os.path.join(destino, slug)
    os.makedirs(carpeta, exist_ok=True)
    total = 0
    for pagina in sorted(por_pagina):
        items = sorted(por_pagina[pagina])
        for i, (_, xref) in enumerate(items):
            datos = doc.extract_image(xref)
            sufijo = '' if len(items) == 1 else '-' + 'abcdefgh'[i]
            extension = 'jpg' if datos['ext'] in ('jpeg', 'jpg') else datos['ext']
            with open(os.path.join(carpeta, f'p{pagina:02d}{sufijo}.{extension}'), 'wb') as f:
                f.write(datos['image'])
            total += 1
    print(f'{slug}: {total} fotos -> {carpeta}')


if __name__ == '__main__':
    destino = sys.argv[1] if len(sys.argv) > 1 else 'src/assets/obras'
    for slug, ruta in PDFS.items():
        extraer(slug, ruta, destino)
