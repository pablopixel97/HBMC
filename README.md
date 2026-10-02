# HBMC — Servicios Constructivos

Sitio web de **HBMC** (Hermansen Bermúdez · Construcción · Maquinaria / Mano de obra), empresa de gestión y ejecución de obras de la V Región, Chile. El sitio es B2B: está dirigido a ingenieros y constructoras que buscan un prestador de servicios constructivos, no al propietario final.

Hecho con [Astro](https://astro.build) y TypeScript en modo estricto.

## Desarrollo

Requiere Node 22.12 o superior.

```sh
npm install
npm run dev       # servidor local en http://localhost:4321
npm run check     # chequeo de tipos
npm run build     # chequeo de tipos + sitio estático en dist/
npm run preview   # sirve dist/ localmente
```

## Estructura

```
hbmc/
├── HBMC/sources/          Material fuente entregado por el cliente (no se publica)
│   ├── marca/             Manual de marca, isotipo, aplicaciones, tarjeta
│   └── *.pdf              Portafolio de obras (Maitencillo, Quirilluca, Fundaciones, Muro perimetral)
├── docs/
│   ├── contenido.md              Textos y datos extraídos de los PDFs
│   ├── referencia-archimagi.md   Análisis de la referencia visual (escritorio, tablet, móvil)
│   └── estructura-sitio.md       Mapa del sitio y contenido por sección para HBMC
├── scripts/
│   └── extraer-fotos.py   Extrae las fotos de los PDFs de obras (requiere PyMuPDF)
├── src/
│   ├── assets/obras/      Fotos de cada obra, nombradas por página del PDF (p27.jpg, p12-a.jpg…)
│   ├── components/        Nav, Footer, PageHero, SectionTitle, ObraCard, Imagen, Servicios, RegistroObra, FormularioContacto, TextoRodante, Isotipo, Intro
│   ├── data/              Contenido tipado: sitio, obras, servicios, registro
│   ├── layouts/           BaseLayout
│   ├── lib/               Utilidades
│   ├── pages/             Rutas: /, /servicios, /obras, /obras/[slug], /nosotros, /contacto
│   └── styles/            tokens.css (diseño) y global.css
├── CLAUDE.md              Contexto del proyecto: marca, decisiones, convenciones
└── README.md
```

## Contacto (según material más reciente)

- Teléfono: +56 9 6842 7880
- Email: companyhbmc@gmail.com
- Instagram: @constructorahbmc
