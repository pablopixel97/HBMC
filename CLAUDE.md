# HBMC — contexto del proyecto

Landing page para HBMC, constructora de la V Región (Chile). Todo el material fuente está en `HBMC/sources/`; el contenido ya extraído está en `docs/contenido.md`. Idioma del sitio: español (Chile).

## Público objetivo (decisión tomada)

La landing le habla a **ingenieros, constructoras y mandantes técnicos** que necesitan un prestador de servicios constructivos (B2B). **No** le habla a la persona que quiere construir su casa.

Implicancias:
- Tono técnico y directo, de par a par. Vocabulario de obra (partidas, obra gruesa, terminaciones, sistemas constructivos, especificaciones, normativa). Nada de "la casa de tus sueños" ni lenguaje emocional orientado al propietario.
- El valor que se comunica: capacidad de ejecución, cumplimiento de especificaciones técnicas, control de calidad por fase, mano de obra calificada, maquinaria propia, rapidez y coordinación con el equipo del proyecto.
- Los proyectos se presentan como casos de ejecución (sistema, fases, especificaciones, m²), no como viviendas en venta ni inspiración de diseño.
- CTA orientados a cotizar servicios o partidas, no a agendar una visita del propietario. Del mockup de nav, "Appointments" y "Locations" no aplican.

## Marca

- **Nombre:** HBMC — H Hermansen · B Bermúdez · C Construcción · M Maquinaria / Mano de obra.
- **Concepto:** "La marca como construcción". Nada de iconografía literal (casas, techos, herramientas, planos). Las letras son piezas modulares; el lenguaje visual es vacío, encuentro, proporción, llenos y vacíos.
- **Adjetivos:** espaciada, moderna, limpia, concreta, robusta.
- **Posicionamiento:** vínculo estratégico entre mandante, propietario y ejecución. "Un vínculo entre la idea y su materialización." "Construir para habitar."
- **Taglines en uso:** Gestión y Ejecución · Servicios Constructivos · Maquinaria Especializada.

### Isotipo

Cuadrícula 2×2 de letras minúsculas en sans geométrica bold:

```
h   b(rotada 90° / invertida)
m(rotada 90°)   c(espejada)
```

Solo la `h` queda en posición normal; `b`, `m` y `c` están rotadas/espejadas. Variantes en `marca/HBMC.COMPORTAMIENTO.ISOTIPO.pdf`: sin marco, con marco cuadrado redondeado, con marco rectangular, y versión expandida (letras separadas horizontalmente). El PDF trae las letras como vectores: las de la página 3 (sin marco) están en `src/data/isotipo.ts`.

### Paleta (valores aproximados, muestreados de los PDFs)

| Rol | Color | Uso |
|---|---|---|
| Grafito | `#22282D` | Fondo principal oscuro, texto sobre claro |
| Crema | `#F3F0E8` | Fondo claro, texto sobre oscuro |
| Blanco | `#FFFFFF` | Fondo alternativo |
| Burdeo | `#5A1432` | Solo en exploraciones previas; no forma parte de la versión final |
| Amarillo | `#F2E500` | Solo en exploraciones previas; no forma parte de la versión final |

La identidad final es bicromática grafito + crema.

Excepción: el footer usa el negro `#0F0F0F` y el gris `#AEAAAA` de composites.archi, por pedido explícito. Están en los tokens `--color-footer-fondo` y `--color-footer-texto`.

### Tipografía

- Logotipo "HBMC" y titulares: sans geométrica bold (tipo Futura Bold).
- Cuerpo de texto en los portafolios: sans geométrica light (tipo Century Gothic).
- En código se usa provisionalmente **Jost** (equivalente libre de Futura, paquete `@fontsource-variable/jost`) con la escala tipográfica de Archimagi. Pendiente de confirmar; se cambia en `src/styles/tokens.css`.

## Referencia visual principal (decisión tomada)

La web sigue la estructura y el sistema visual de **Archimagi** (https://archimagi.framer.website/), una plantilla de Framer.
- `docs/referencia-archimagi.md`: análisis de la referencia, con breakpoints, tokens, tipografía, secciones y comportamiento en escritorio, tablet y móvil.
- `docs/estructura-sitio.md`: la adaptación a HBMC, con mapa del sitio, contenido por sección, cambios de paleta y tipografía, y fotos necesarias.

No se copia código, imágenes ni textos de la plantilla; se recrea con código propio y material de HBMC.

Breakpoints: escritorio ≥1200 px (diseño a 1440), tablet 810–1199 px, móvil <810 px (diseño a 390). Márgenes laterales: 40 px en escritorio y 20 px en tablet y móvil.

## Stack y código (decisión tomada)

- **Astro 7 + TypeScript en modo estricto** (`tsconfig.json` extiende `astro/tsconfigs/strict`). Sitio estático, sin framework de UI.
- TypeScript fijado en **6.x**: `@astrojs/check` todavía no admite TypeScript 7.
- Node ≥ 22.12.
- Comandos: `npm run dev` (desarrollo), `npm run check` (tipos), `npm run build` (corre `astro check` y luego compila a `dist/`), `npm run preview`.
- Si el build termina sin errores pero `dist/` sale sin CSS (no hay `dist/_astro/*.css`), borrar `node_modules/.vite` y volver a compilar. Pasó con `npm run dev` corriendo en paralelo; no se pudo reproducir.

Estructura de `src/`:
- `data/`: contenido tipado (`site.ts`, `obras.ts`, `servicios.ts`, `registro.ts`) y los vectores del isotipo (`isotipo.ts`). En `obras.ts`, `null` significa "dato pendiente del cliente" y la web no lo muestra. En `servicios.ts` cada servicio trae su detalle para /servicios: resumen, alcance y las obras donde se aplicó (si cita una obra que no existe, el build falla).
- `styles/tokens.css`: paleta, escala tipográfica, márgenes y breakpoints. Cualquier cambio de color o de fuente se hace aquí.
- `styles/global.css`: reset, temas de sección (`.tema-claro`, `.tema-crema`, `.tema-oscuro`) y utilidades (`.contenedor`, `.seccion`, `.etiqueta`, `.bajada`).
- `components/`: `Nav`, `Footer`, `PageHero` (hero interior fijo; lo que viene después lo tapa al hacer scroll), `SectionTitle` (títulos "Gris Negro": primera palabra en gris, sin barra), `ObraCard`, `Imagen`, `Servicios`, `RegistroObra` (galería con el título fijo y las fotos flotantes), `FormularioContacto` (solicitud de cotización; `BaseLayout` la agrega con la prop `formulario`, hoy en todas las páginas), `TextoRodante` (texto o contenido que rueda al pasar el mouse), `Isotipo` (el logo en SVG, en el color del texto) e `Intro` (animación de entrada).
- Animación de entrada (`Intro`): recrea el preloader de centralohiore.com con el isotipo. Sobre fondo crema, las letras se dibujan y se rellenan una tras otra, y la intro sale apenas se llena la última (a los ~2 s) o cuando la página termina de cargar, si eso tarda más.
  - Solo aparece en la primera llegada de la sesión desde fuera del sitio (`sessionStorage`), no en las navegaciones internas, y nunca con `prefers-reduced-motion`.
  - La decide el script del `<head>` de `BaseLayout`, que también marca la entrada del nav.
- `pages/`: rutas de `docs/estructura-sitio.md`; `obras/[slug].astro` genera una página por obra. `favicon.svg.ts`, `favicon.ico.ts` y `apple-touch-icon.png.ts` generan los íconos en el build desde los vectores del isotipo (`lib/favicon.ts`, con sharp, que ya instala Astro): letras crema sobre un cuadrado grafito.
- `assets/obras/<obra>/`: fotos extraídas de los PDFs con `scripts/extraer-fotos.py` (requiere PyMuPDF). El nombre es la página del PDF: `p27.jpg`, o `p12-a.jpg` / `p12-b.jpg` de izquierda a derecha.
- `assets/sitio/`: fotos generales que no pertenecen a una obra. Se referencian como `archivo: 'sitio/equipo.jpg'`. `equipo.jpg` es el hero de /nosotros, reducido a 2880 px.

Fotos:
- Siempre con `<Imagen foto={...} />` (`components/Imagen.astro`), nunca `<Image>` directo. Centraliza la búsqueda del archivo (`lib/fotos.ts`, que hace fallar el build si no existe), el `alt`, el `layout` y la calidad.
- Una foto es `{ archivo: 'quirilluca/p02.jpg', alt: '...' }`. El `alt` describe lo que se ve.
- Dentro de un enlace con texto (tarjetas) se usa `decorativa`, que deja el alt vacío.
- Heroes: `layout="full-width"` y `priority`; el resto, `constrained`.
- Calidad WebP 60: las fotos de los PDFs ya vienen comprimidas y a calidad 80 pesaban hasta el doble que el JPEG original.

Convenciones:
- Nombres de dominio y de UI en español.
- CSS propio con variables y estilos con alcance por componente.
- Interacciones en TypeScript dentro de cada componente, sin librerías de animación por ahora.
- Animaciones: los valores salen de la tabla "Interacciones" de `docs/referencia-archimagi.md`.
  - Primero CSS (transiciones, `@keyframes`, `animation-timeline` dentro de `@supports`). TypeScript solo donde CSS no alcanza.
  - Los resortes de Framer están en `tokens.css` como curvas `linear()`: `--curva-resorte` y `--curva-amortiguada`.
  - Todo movimiento se apaga con `prefers-reduced-motion`.
  - Con `animation-timeline` se usan solo longhands (`animation-name`, etc.). Si se usa el shorthand `animation`, el minificador mete `view()` dentro y Chrome descarta la declaración entera; en `npm run dev` funciona, así que el error solo aparece en el build.
- Las secciones aún no implementadas se marcan con `TODO`.
- Los comentarios en plantillas `.astro` van como `{/* */}`; los `<!-- -->` se publican en el HTML.

## Mockup web del manual de marca (superado)

`marca/HBMC.26.pdf` y `marca/MARCA.HBMC.pdf` incluyen un mockup anterior: hero con foto de estructura de madera y el título "HBMC SERVICIOS CONSTRUCTIVOS" con el isotipo enmarcado. La referencia de Archimagi lo reemplaza. Del mockup se conserva el tratamiento de fotos oscuras con el isotipo sobreimpreso.

## Pendientes / dudas abiertas

- Formulario de cotización: por ahora abre el correo del visitante con la solicitud redactada (`mailto:`). Para recibirla directamente hace falta un servicio de formularios o un backend, y con eso una política de privacidad. Decidir con el cliente.
- Contacto inconsistente entre PDFs: se usa el más reciente (+56 9 6842 7880, companyhbmc@gmail.com). Otras versiones: +56 9 6571 2769, +56 9 6586 1757, hbmc@gmail.com, hbnb@gmail.com. Confirmar con el cliente.
- Dominio: los mockups muestran `www.hbmc.cl`.
- Fotografías: ya se extrajeron de los PDFs (94 fotos en `src/assets/obras/`), pero vienen en baja resolución.
  - La mayoría mide 520–580 px de ancho y la más grande 1537 px (Maitencillo p27). Todas las de Fundaciones y Muro perimetral miden 579 px.
  - A pantalla completa se ven blandas. Pedir al cliente los archivos originales de cámara o celular.
  - Al reemplazarlas, conservar los nombres `pNN` o actualizar `src/data/obras.ts`.
- Los textos de los PDFs tienen erratas ("TEXTO TÉCNCO", "Panl Microondulado", "Maquinaría", "DESARROLLO DE PORYOECTOS", "OBRA GURESA"); corregirlas en la web. Ya están corregidas en `src/data/obras.ts`.
- Datos de obra que no están en las fuentes:
  - Maitencillo: los 92 m² ¿son por vivienda o en total?
  - Fundaciones: año, estado, ubicación y cliente.
  - Muro perimetral: estado, ubicación y cliente. El año 2026 se tomó del nombre del archivo.
- Color de acento (crema o amarillo `#F2E500`): definido en `--color-acento` de `src/styles/tokens.css`. Por ahora es crema.
