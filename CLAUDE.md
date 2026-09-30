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

Solo la `h` queda en posición normal; `b`, `m` y `c` están rotadas/espejadas. Variantes en `marca/HBMC.COMPORTAMIENTO.ISOTIPO.pdf`: sin marco, con marco cuadrado redondeado, con marco rectangular, y versión expandida (letras separadas horizontalmente). Hay que reconstruirlo como SVG — no existe archivo vectorial en las fuentes.

### Paleta (valores aproximados, muestreados de los PDFs)

| Rol | Color | Uso |
|---|---|---|
| Grafito | `#22282D` | Fondo principal oscuro, texto sobre claro |
| Crema | `#F3F0E8` | Fondo claro, texto sobre oscuro |
| Blanco | `#FFFFFF` | Fondo alternativo |
| Burdeo | `#5A1432` | Solo en exploraciones previas; no forma parte de la versión final |
| Amarillo | `#F2E500` | Solo en exploraciones previas; no forma parte de la versión final |

La identidad final es bicromática grafito + crema.

### Tipografía

- Logotipo "HBMC" y titulares: sans geométrica bold (tipo Futura Bold).
- Cuerpo de texto en los portafolios: sans geométrica light (tipo Century Gothic).
- Pendiente: elegir equivalentes web (Google Fonts) o confirmar licencias.

## Referencia de aplicación web

`marca/HBMC.26.pdf` y `marca/MARCA.HBMC.pdf` incluyen un mockup de web: nav superior (About, Home, Services, Contact, Locations, Appointments + botón "CALL"), hero a pantalla completa con fotografía de estructura de madera y el título "HBMC SERVICIOS CONSTRUCTIVOS" con el isotipo enmarcado. Las fotos del feed de Instagram van en blanco y negro o en tonos oscuros, con el isotipo sobreimpreso.

## Pendientes / dudas abiertas

- Contacto inconsistente entre PDFs: se usa el más reciente (+56 9 6842 7880, companyhbmc@gmail.com). Otras versiones: +56 9 6571 2769, +56 9 6586 1757, hbmc@gmail.com, hbnb@gmail.com. Confirmar con el cliente.
- Dominio: los mockups muestran `www.hbmc.cl`.
- Fotografías: están embebidas en los PDFs de proyectos; hay que extraerlas y optimizarlas (no hay archivos originales en las fuentes).
- Los textos de los PDFs tienen erratas ("TEXTO TÉCNCO", "Panl Microondulado", "Maquinaría", "DESARROLLO DE PORYOECTOS", "OBRA GURESA"); corregirlas en la web.
