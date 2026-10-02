# Referencia visual principal: Archimagi

URL: https://archimagi.framer.website/

Plantilla de Framer para estudios de arquitectura. La usamos como referencia de **estructura, ritmo y sistema visual**, no como fuente de código ni de material: el sitio está compilado por Framer y sus imágenes y textos pertenecen a la plantilla. Recreamos el diseño con código propio y con material de HBMC.

Análisis hecho el 2026-10-01 a partir del HTML servido y de capturas a 1440 px (escritorio) y 390 px (móvil). Los valores de las animaciones salen de los módulos JavaScript que publica Framer (ver "Interacciones").

## Breakpoints

| Vista | Rango | Ancho de diseño | Margen lateral |
|---|---|---|---|
| Escritorio | ≥ 1200 px | 1440 px | 40 px |
| Tablet | 810–1199 px | 810 px | 20 px |
| Móvil | < 810 px | 390 px | 20 px |

## Tokens

**Colores**

| Token | Valor | Uso |
|---|---|---|
| Negro | `#0D0D0D` | Fondo de secciones oscuras, pills del nav, texto principal |
| Blanco | `#FFFFFF` | Fondo de secciones claras |
| Hueso | `#FCF9F5` | Texto sobre fotos y fondos oscuros |
| Gris | `#8A8A8A` | Primera palabra de los títulos ("/About"), metadatos, servicios inactivos |
| Gris claro | `#F5F5F5` | Barras de progreso, separadores |
| Acento | `#F6F855` | Botón "View all works", banda del CTA |

**Tipografía** (escritorio / tablet / móvil)

| Estilo | Fuente | Tamaño | Peso | Tracking | Interlineado |
|---|---|---|---|---|---|
| Título de sección (h2) | Geist | 72 / 64 / 48 px | 500 | −0.08em | 1.0 |
| Bajada (h3) | Geist | 32 / 28 / 26 px | 500 | −0.04em | 1.2 |
| Texto grande | Inter Display | 28 / 26 / 24 px | 500 | −0.02em | 1.4 |
| Texto medio | Inter Display | 24 / 20 / 20 px | 500 | −0.02em | 1.4 |
| Cuerpo | Inter Display | 18 / 16 / 16 px | 500 | −0.02em | 1.4 |
| Pie de proyecto | Inter Display | 20 / 18 / 16 px | 500 | −0.02em | 1.2 |
| Etiquetas / nav | Inter Display | 14 px | 600 | −0.02em | 1.4 |
| Wordmark gigante | Geist | ancho completo (~ 18vw) | 500 | ajustado | 1.0 |

## Patrones de diseño que se repiten

- **Título "/Gris Negro":** cada sección parte con una barra y dos palabras; la primera va en gris y la segunda en el color del texto ("/About Us", "/Selected Projects", "/Happy Clients").
- **Wordmark gigante:** el nombre de la marca ocupa todo el ancho, alineado abajo y cortado por el borde inferior. Aparece en el hero y en el footer.
- **Etiquetas entre paréntesis:** en mayúsculas y en tamaño chico: "(MENU)", "(SOCIALS)", "(VISIT)", "(CONTACT)". Los números de servicio van como superíndice: "(01)".
- **Mucho espacio vacío:** los bloques de texto ocupan media columna y las bajadas se alinean a la derecha.
- **Alternancia de fondos:** las secciones van en el orden blanco → negro → negro → blanco → blanco → acento → negro.

## Navegación

- La barra va fija arriba. A la izquierda está el logo y a la derecha el botón "MENU" con un pequeño círculo. Ambos son pills negras con texto hueso de 14 px y quedan a ~26 px del borde.
- Sobre las secciones oscuras las pills parecen perder el fondo, pero es solo porque son del mismo negro que la sección: el nav no cambia.
- El HTML trae enlaces About / Projects / Contact, pero en pantalla solo se ve "MENU", que abre un panel desplegable bajo el botón (no a pantalla completa). En el móvil se usa el mismo esquema, logo y "MENU".

## Home, sección por sección

1. **Hero** (100vh). Foto a sangre. Abajo va el wordmark gigante "ARCHIMAGI" y, justo encima a la derecha, la bajada "A MAGICAL APPROACH TO ARCHITECTURE" en mayúsculas.
   *Móvil:* el wordmark se ajusta al ancho y la bajada pasa a la izquierda en dos líneas.
2. **/About Us** (fondo blanco). El título va arriba a la izquierda y la bajada h3 a la derecha. Debajo hay dos columnas: a la izquierda un párrafo con una foto y a la derecha una foto más alta, desfasada. Cierra con una fila de 4 cifras grandes (15+, 30, 97 %, 4) con etiqueta en mayúsculas; los números se animan contando al entrar.
   *Móvil:* todo va en una columna y las cifras en grilla de 2×2.
3. **/Selected Projects** (fondo negro). El título gigante en hueso, ajustado al ancho de la pantalla, queda fijo al centro en un bloque de 100vh. Las tarjetas de proyecto (~1000 px de ancho, centradas) suben por encima del título al hacer scroll y crecen de 0.7 a 1 mientras entran. Bajo cada foto va el nombre a la izquierda y, a la derecha, la categoría y el año en gris.
   *Móvil:* las tarjetas van a ancho completo y el título también queda fijo.
4. **/All Work** (fondo negro). El título va centrado con un botón de acento debajo y queda fijo (100vh) por encima de las fotos. Debajo pasa una galería dispersa de 15 fotos: tres filas en una grilla de 13 columnas, cada fila con 5 fotos de 3, 1 o 2 columnas separadas por una columna vacía. Todas las fotos se alejan del mouse.
   *Móvil:* la grilla pasa a 8 columnas y las fotos se reordenan.
5. **/Specializations & Services** (fondo blanco). Los servicios se escriben como un párrafo continuo grande, separados por " / " y con superíndice (01)…(06). El servicio activo va en negro y el resto en gris. A la derecha hay un carrusel de 6 fotos sincronizado con el servicio activo. Debajo, en grilla, van la etiqueta "OUR METHOD" y un párrafo.
   *Móvil:* todo en una columna.
6. **/Happy Clients** (fondo blanco). Título y bajada a la derecha. Cada tarjeta muestra una foto del proyecto a la izquierda y la cita con avatar, nombre y cargo a la derecha. Debajo van pestañas con logos de clientes y una barra de progreso de autoplay.
   *Móvil:* la foto va arriba y la cita abajo.
7. **CTA** (banda de color de acento). Un ticker infinito con texto gigante: "YOUR FUTURE SPACE AWAITS – GET IN TOUCH –".
8. **Footer** (fondo negro). A la izquierda una foto. Al centro "(MENU)" con los enlaces grandes y debajo "(VISIT)" con la dirección. A la derecha "(SOCIALS)" con flechas ↗ y "(CONTACT)" con teléfono y email. Al pie va una fila con © a la izquierda, Terms y Privacy al centro y "Back to the top ↑" a la derecha. Cierra con el wordmark gigante cortado.
   *Móvil:* menú y redes en 2 columnas; el resto apilado, con la foto antes de la fila legal.

## Páginas interiores

- **Hero de las páginas interiores.** Foto a sangre con degradado oscuro en la parte de abajo y el h1 abajo a la izquierda en hueso. Mide 100vh (95vh en móvil; 90vh en About) y queda fijo: el contenido, con fondo propio, sube por encima al hacer scroll. Ejemplos: "Meet the Magical Team", "Our Projects", "Have a project in mind? Contact us!".
- **About.** /Our Mission (texto y foto); /Meet Our Team (equipo agrupado por área, cada grupo con etiqueta en pill y tarjetas con foto, cargo y nombre que enlazan a LinkedIn); /Awards & Recognitions (lista con nombre, premio y año, separada por líneas); /Job Offers (filas con cargo, jornada y ciudad).
- **Projects.** Los proyectos se agrupan por categoría ("/Architectural Design", "/Landscape Architecture", "/City Planning"). Cada grupo usa la misma tarjeta que la home y termina con un enlace "VIEW ALL".
- **Detalle de proyecto.**
  - Hero con foto a sangre y el nombre del proyecto.
  - Debajo, dos columnas. La izquierda queda fija: "/Project Details", una grilla de datos de 3×2 (Date, Status, Location, Size, Client, Sector; etiqueta en gris y valor en negro) y la descripción. La derecha es una columna de fotos que avanza con el scroll.
  - Cierra con el enlace al siguiente proyecto ("Nombre ›", alineado a la derecha) y "RELATED PROJECTS" en grilla de 3.
  - *Móvil:* la grilla de datos pasa a 2 columnas y las fotos se apilan.
- **Contact.** Hero y "/Contact Us". A la izquierda "HOW TO FIND US" (dirección y horario) y a la derecha "HOW TO TALK TO US" (teléfono, email y redes). No tiene formulario.

## Interacciones

Valores sacados de los módulos de Framer. Un resorte `{ duration, bounce }` llega al 0,1 % de su amplitud en `duration`.

| Elemento | Animación | Valores |
|---|---|---|
| Nav | Al cargar baja desde −150 px y aparece | Resorte { stiffness 200, damping 60, mass 1 }, retardo 0.2 s. Se asienta en ~1.6 s, sin rebote |
| Botones (nav, "View all works") | El texto sale hacia arriba y entra una copia desde abajo; el punto se achica de 8 a 4 px | Resorte { duration 0.5, bounce 0.15 } |
| Tarjeta de proyecto | El título sale hacia arriba y entra "Open Project →" desde abajo | Resorte { duration 0.4, bounce 0.2 } |
| Tarjetas en /Selected Projects | Escala 0.7 → 1 ligada al scroll, desde que el borde superior entra por abajo hasta que el inferior llega al fondo de la pantalla | Desactivado en móvil |
| Títulos de /Selected Projects y /All Work | Fijos (sticky) en un bloque de 100vh. Las tarjetas pasan por encima del primero y las fotos por debajo del segundo | — |
| Galería de /All Work ("Parallax Floating") | Cada foto se aleja del cursor según su distancia al centro de la pantalla | Hasta 20 px; suavizado con resorte { stiffness 635, damping 100 } |
| Cifras de /About Us | Cuentan desde 0 al entrar a la pantalla, una vez | 2 s, ease-out |
| Servicios | El activo cambia de color y la foto hace un fundido | 0.3 s ease. Cambia al hacer clic, sin autoplay |
| Hero de páginas interiores | Queda fijo (sticky, z-index 1) y el resto de la página (z-index 2, con fondo) lo tapa como un telón | 100vh; 95vh en móvil |
| Detalle de proyecto | La columna "/Project Details" queda fija mientras avanzan las fotos | A 100 px del borde superior; en escritorio y tablet |
| Tarjeta de equipo (About) | La foto escala a 1.1 y gira 1°; el panel con nombre y cargo sube desde abajo, aparece y desenfoca el fondo; la flecha gira 45° | Resortes sin rebote de 0.5 y 0.6 s |
| Testimonios | Avanzan solos con barra de progreso | 7 s por testimonio, ease [0.44, 0, 0.56, 1] |
| CTA | Ticker infinito hacia la izquierda. Está en la plantilla: cierra todas las páginas | 50 px/s, no se frena al pasar el mouse |
| Panel del menú | Fundido | Resorte { duration 0.4, bounce 0.2 } |
| Footer, enlaces del menú | Un bloque claro barre el enlace de izquierda a derecha y el texto pasa a negro | Resorte { duration 0.4, bounce 0.2 } |
| Footer, redes | La flecha ↗ sale arriba a la derecha y entra otra desde abajo a la izquierda | Resorte { duration 0.4, bounce 0.2 } |

No hay apariciones de contenido al hacer scroll (fade-in o slide-in): fuera de lo anterior, los bloques están estáticos.
