# Estructura del sitio HBMC

Este documento adapta la estructura de [Archimagi](referencia-archimagi.md) a HBMC, con un enfoque B2B (ver "Público objetivo" en `CLAUDE.md`). Los textos son borradores en el tono definido. Lo marcado **[PENDIENTE]** son datos que tiene que entregar el cliente.

## Mapa del sitio

| Ruta | Página | Equivalente en Archimagi |
|---|---|---|
| `/` | Inicio | Home |
| `/servicios` | Servicios | — (página propia de HBMC) |
| `/nosotros` | Nosotros | About |
| `/obras` | Obras | Projects |
| `/obras/quirilluca` | Detalle de obra | Project detail |
| `/obras/maitencillo` | Detalle de obra | Project detail |
| `/obras/fundaciones` | Detalle de obra | Project detail |
| `/obras/muro-perimetral` | Detalle de obra | Project detail |
| `/contacto` | Contacto | Contact |

Las páginas legales de Archimagi (términos y privacidad) se dejan fuera mientras no haya formulario ni recolección de datos.

## Adaptación del sistema visual a la marca

| Archimagi | HBMC | Nota |
|---|---|---|
| Negro `#0D0D0D` | Grafito `#22282D` | Fondos oscuros, pills del nav y texto |
| Blanco `#FFFFFF` | Blanco `#FFFFFF` y crema `#F3F0E8` | Crema para alternar secciones claras |
| Hueso `#FCF9F5` | Crema `#F3F0E8` | Texto sobre fotos y fondos oscuros |
| Gris `#8A8A8A` | Gris cálido (~`#8C8A85`, por definir) | Primera palabra de los títulos y metadatos |
| Acento amarillo `#F6F855` | **[DECISIÓN]** crema sobre grafito, o el amarillo `#F2E500` de las exploraciones | La identidad final es bicromática; ver dudas abiertas |
| Geist / Inter Display | Propuesta: **Jost** (equivalente libre de Futura) para títulos y wordmark, más una sans neutra para el cuerpo | Confirmar contra la marca |
| Wordmark "ARCHIMAGI" | Wordmark "HBMC" | Con 4 letras queda muy potente a ancho completo |
| Pill de logo con texto | Pill con el isotipo 2×2, más "HBMC" | Requiere el isotipo en SVG |

Se mantienen sin cambios: los breakpoints (1200 / 810), los márgenes (40 / 20 px), la escala tipográfica, el patrón de títulos con la primera palabra en gris y las etiquetas entre paréntesis.

**Decisión:** los títulos no llevan la barra "/" de Archimagi ("Especialidades & Servicios", no "/Especialidades & Servicios"). En este documento la barra se mantiene solo para identificar las secciones.

## Navegación

- **Logo:** el isotipo en el pill, enlazado al inicio; al pasar el mouse rueda.
- **Enlaces:** SERVICIOS · OBRAS · NOSOTROS · CONTACTO · MENÚ. Servicios va primero porque es lo que más pesa para el público B2B. Sin el punto de la referencia; al pasar el mouse el texto solo crece (escala 1.1), y la página o sección actual va subrayada.
- **Panel del menú:** además de los enlaces, el teléfono y el email visibles, para que el contacto quede a un clic.

## `/` Inicio

Orden pensado para el público B2B: primero qué se ejecuta (servicios), después la prueba (obras y registro de obra) y luego quién es HBMC, antes del contacto. Archimagi abre con "/About" porque es un estudio que vende su mirada; a HBMC la eligen por lo que puede ejecutar.

1. **Hero.** Foto a sangre de la vivienda terminada de Maitencillo (pág. 27). Abajo a la izquierda va el titular, con el formato del de composites.archi: mayúsculas grandes y la primera línea entrada. Las dos primeras líneas van en gris y las dos últimas en crema:
   > EJECUCIÓN DE OBRA / EN LA V REGIÓN, / DE LA IDEA A LA / OBRA CONSTRUIDA

   Las animaciones de entrada y salida son las del titular de la referencia:
   - **Entrada:** cada vez que se carga el inicio, las palabras suben una tras otra (si hay intro, cuando esta sale).
   - **Salida:** al hacer scroll el hero queda fijo y las palabras se desvanecen una a una. En móvil queda fijo menos tiempo (60vh en vez de 150vh).
   - **Móvil:** el tamaño del titular se ajusta al ancho para que cada línea entre entera, sin palabras sueltas.

   Reemplaza al wordmark gigante HBMC.
2. **/Especialidades & Servicios** (fondo claro). Lista de los servicios, sin números:
   > Gestión y ejecución de obra / Obra gruesa / Fundaciones y hormigón armado / Estructuras en madera y paneles SIP / Instalaciones / Terminaciones / Maquinaria especializada / Mano de obra calificada

   Cada servicio enlaza a su detalle en `/servicios`, y una flecha → lo indica: con mouse aparece en el servicio activo; en pantallas táctiles queda siempre visible en gris.

   Con 8 servicios en vez de 6, se puede recortar o fusionar alguno. El carrusel muestra una foto por servicio: rota sola y cambia al pasar el mouse o con el teclado. La rotación se pausa con el mouse o el foco encima y, en pantallas táctiles, se detiene al tocar la sección (WCAG 2.2.2).
   - **NUESTRO MÉTODO:** "Ejecutamos por fases, desde el trazado hasta la recepción, con control de niveles, alineamientos y especificaciones en cada etapa y en coordinación con el equipo del proyecto."
3. **/Obras Seleccionadas** (fondo grafito). El título queda fijo y las tarjetas pasan por encima. En cada pie de foto, la categoría se reemplaza por el **sistema constructivo**:

   | Obra | Sistema | Año |
   |---|---|---|
   | Quirilluca | Paneles SIP sobre pilotes | 2026 |
   | Maitencillo | Tabiquería en madera | 2024 |
   | Muro perimetral | Albañilería confinada | 2026 |
   | Fundaciones | Hormigón armado | **[PENDIENTE]** |

4. **/Registro de Obra** (fondo grafito). Equivale a "/All Work": fotos de proceso en parallax (trazado, enfierradura, hormigonado, montaje de tabiques, techumbre) y el botón **VER TODAS LAS OBRAS**. Le da un uso propio a la sección: muestra el oficio, no solo el resultado.
5. **/Sobre HBMC** (fondo claro).
   - Bajada h3: *"Un vínculo entre la idea y su materialización."*
   - Párrafo: "Ejecutamos obra para constructoras, oficinas de ingeniería y mandantes técnicos. Coordinamos especialidades, maquinaria y mano de obra calificada para transformar un proyecto en una obra construida, coherente y técnicamente resuelta."
   - Dos fotos de obra en proceso.
   - **Cifras** (4). Cambian respecto de Archimagi, porque el "% de satisfacción" no aplica a una empresa B2B:
     - años de experiencia **[PENDIENTE]**
     - obras ejecutadas **[PENDIENTE]**
     - m² construidos **[PENDIENTE]**
     - 4 sistemas constructivos (madera · SIP · hormigón armado · albañilería confinada)
6. **/Trabajamos Con** (fondo claro). Reemplaza "/Happy Clients". Lleva testimonios de ingenieros o constructoras, con foto de la obra, cita, nombre, cargo y empresa, y logos de los clientes en las pestañas. **[PENDIENTE]** testimonios y logos. Si no hay, la sección se elimina en el lanzamiento.
7. **Solicitud de cotización** (fondo grafito). Recreada de la sección de contacto de composites.archi.
   - Arriba a la izquierda, la etiqueta "SOLICITUD DE COTIZACIÓN", que dice qué es la sección (el título es un eslogan).
   - A la izquierda va el título "Desde el trazado hasta la recepción, HBMC ejecuta cada partida con control en todas sus fases." (HBMC destacado) y la bajada "Respondemos cada solicitud de cotización."
   - A la derecha, el formulario: nombre, apellido, email, teléfono, cargo, empresa, partida (lista de servicios), ubicación de la obra y mensaje.
   - En escritorio el título, las líneas y los campos aparecen mientras la sección entra a la pantalla; cuando llega arriba, el formulario está completo. En la referencia la sección quedaba fija durante 300vh, pero el formulario tardaba demasiado en aparecer.
8. **Footer**, recreado de composites.archi con sus colores y medidas: fondo #0F0F0F y texto #AEAAAA al 50 %.
   - A la izquierda va el menú (Inicio, Servicios, Obras, Nosotros, Contacto) y, debajo, "©HBMC 2026. Todos los derechos reservados."
   - A la derecha, en lugar de About / Legals / Credits, van funciones de navegación: página anterior, página siguiente (en el orden del menú, en círculo) y "Volver arriba ↑".
   - Todo en mayúsculas chicas. Al pasar el mouse, el enlace toma el color de acento y opacidad completa.

## `/servicios`

Página propia de HBMC, sin equivalente en Archimagi: le da a los servicios el peso que tienen para el público B2B. Los textos salen de las fases y especificaciones de los PDFs de obra; los datos están en `src/data/servicios.ts`.

1. **Hero:** *"Ejecutamos cada partida, de la fundación a la terminación."* Foto: `maitencillo/p19.jpg` (obra gruesa sobre pilotes).
2. **/Servicios Constructivos.** Bajada sobre contratar por partida o la obra completa e índice de los 8 servicios, con enlace a cada uno.
3. **Detalle de cada servicio:** nombre, resumen, alcance (partidas incluidas), obras del portafolio donde se aplicó (con enlace) y foto.
4. **/Nuestro Método** (fondo grafito). El método y sus cinco etapas: trazado, fundaciones, estructura, envolvente e instalaciones, terminaciones y recepción.
5. **Solicitud de cotización**, como en el inicio.

**[PENDIENTE]** Confirmar con el cliente:
- **Maquinaria:** qué equipos tiene y para qué faenas.
- **Servicios que no están en la página:** las fuentes también nombran anteproyecto, desarrollo de proyectos y posventa.

## `/nosotros`

1. **Hero.** Foto del equipo en obra **[PENDIENTE]** con el h1 *"Construir para habitar."*
2. **/Nuestra Misión.** Texto de identidad tomado de `docs/contenido.md`: la articulación entre arquitectura, ingeniería, diseño, mano de obra y maquinaria. Agregar lo que significa HBMC: H Hermansen · B Bermúdez · C Construcción · M Maquinaria / Mano de obra.
3. **/Nuestro Equipo.** Agrupado por área en pills (por ejemplo DIRECCIÓN · INGENIERÍA · EJECUCIÓN · MAQUINARIA), con foto, cargo y nombre. **[PENDIENTE]**
4. **/Sistemas & Normativa.** Reemplaza "/Awards". Usa el mismo formato de lista con separadores para mostrar cada sistema constructivo y la normativa que se cumple (por ejemplo, instalaciones eléctricas según normativa SEC). Si el cliente tiene certificaciones o premios, van aquí.
5. **/Trabaja con Nosotros.** Reemplaza "/Job Offers". Calza con el objetivo de marca de profesionalizar la mano de obra calificada. Lleva filas con cargo, jornada y zona. **[PENDIENTE]** si hay vacantes.
6. **Solicitud de cotización**, como en el inicio.

## `/obras`

- **Hero:** *"Obras"*.
- **Grupos por tipo** (reemplazan las categorías de Archimagi):
  - **/Viviendas Unifamiliares:** Quirilluca y Maitencillo.
  - **/Obra Gruesa:** Fundaciones y Muro perimetral.
- **Solicitud de cotización**, como en el inicio.

## `/obras/[obra]`, detalle

1. **Hero:** foto a sangre con el nombre de la obra.
2. **/Detalles de Obra** (columna fija), con una grilla de 3×2:
   - **Año**
   - **Estado** (Terminada / En ejecución)
   - **Ubicación**
   - **Superficie**
   - **Cliente** (Privado)
   - **Sistema** (en lugar de "Sector")

   Debajo, la descripción. La columna derecha lleva las fotos de la obra.
3. **Agregado para HBMC: /Fases de Ejecución.** Lista numerada de las fases, con una foto y un texto breve por fase, tomados del PDF de cada obra (7 a 9 fases por obra). Es el contenido que más le interesa al público técnico.
4. **Agregado para HBMC: /Especificaciones Técnicas.** La tabla de especificaciones técnicas de los PDFs (solo Quirilluca y Maitencillo), con la fila ítem / especificación y separadores.
5. **Navegación:** siguiente obra › y OBRAS RELACIONADAS (grilla de 3).
6. **Solicitud de cotización**, como en el inicio: quien termina de revisar una obra tiene dónde pedir la suya.

## `/contacto`

1. **Hero:** *"¿Tienes una obra en curso? Conversemos."*
2. **/Contacto.**
   - **DÓNDE OPERAMOS:** V Región, litoral central. Horario de atención **[PENDIENTE]**.
   - **CÓMO HABLARNOS:** teléfono, email e Instagram.
3. **Solicitud de cotización:** el mismo formulario del inicio.
   - **Envío:** por ahora el formulario abre el correo del visitante con la solicitud redactada. **[PENDIENTE]** Para recibirla directamente hace falta un backend o un servicio de formularios, y con eso una política de privacidad.
   - **Adjuntos:** los planos o EETT quedan fuera hasta que exista ese servicio.

## Fotografías por sección

Archivos en `src/assets/obras/<obra>/`, nombrados por página del PDF.

| Sección | Foto | Estado |
|---|---|---|
| Hero inicio | `maitencillo/p27.jpg` | Hecho |
| Sobre HBMC (2) | `quirilluca/p07.jpg` (equipo montando una cercha), `fundaciones/p09.jpg` (hormigonado con bomba) | Hecho |
| Obras seleccionadas | Portada de cada obra (`portada` en `src/data/obras.ts`) | Hecho |
| Hero de Obras / Nosotros / Contacto | `quirilluca/p06.jpg` / `maitencillo/p06.jpg` / `quirilluca/p10.jpg` | Hecho |
| Detalle de obra | Portada en el hero, `destacadas` en la columna derecha y una foto por fase | Hecho |
| Registro de obra (15) | Fotos de proceso de Maitencillo y Quirilluca que no salen en otra sección del inicio (`src/data/registro.ts`) | Hecho |
| Especialidades (1 por servicio) | Fotos de fases según el servicio | Pendiente |
| Footer | El footer actual no lleva foto | No aplica |
