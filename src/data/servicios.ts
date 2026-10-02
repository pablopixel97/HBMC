import type { Foto } from './obras';

export interface Servicio {
  /** Ancla del servicio en /servicios (por ejemplo /servicios#obra-gruesa). */
  slug: string;
  nombre: string;
  /** Obra de la que sale la foto; se muestra en el pie. */
  obra: string;
  foto: Foto;
  /** Qué es el servicio, en una o dos frases. */
  resumen: string;
  /** Partidas que incluye. */
  alcance: readonly string[];
  /** Slugs de las obras del portafolio donde se aplicó (src/data/obras.ts). */
  obras: readonly string[];
}

// Orden de docs/estructura-sitio.md, sección "/Especialidades & Servicios". Los textos salen de
// las fases y especificaciones de los PDFs de obra (docs/contenido.md).
export const servicios: readonly Servicio[] = [
  {
    slug: 'gestion-y-ejecucion',
    nombre: 'Gestión y ejecución de obra',
    obra: 'Maitencillo',
    foto: {
      archivo: 'maitencillo/p25.jpg',
      alt: 'Vista general de la obra en Maitencillo, con las dos viviendas sobre pilotes y el cerro de fondo.',
    },
    resumen:
      'Planificamos la obra por fases, coordinamos especialidades, maquinaria y mano de obra, y respondemos por la ejecución ante el mandante y el equipo del proyecto.',
    alcance: [
      'Planificación de la obra por fases',
      'Coordinación de especialidades, maquinaria y mano de obra',
      'Control de niveles, alineamientos y especificaciones en cada etapa',
      'Coordinación con arquitectura e ingeniería',
      'Recepción por etapa',
    ],
    obras: ['maitencillo', 'quirilluca'],
  },
  {
    slug: 'obra-gruesa',
    nombre: 'Obra gruesa',
    obra: 'Muro perimetral',
    foto: {
      archivo: 'muro-perimetral/p06.jpg',
      alt: 'Muro de albañilería de bloque cerámico en elevación, junto a las armaduras de los pilares de confinamiento.',
    },
    resumen:
      'Estructura y envolvente, desde el replanteo hasta dejar la obra cerrada, ejecutadas según los planos estructurales y las especificaciones técnicas del proyecto.',
    alcance: [
      'Replanteo topográfico de ejes y niveles',
      'Sobrecimientos de hormigón armado',
      'Albañilería confinada: muros, pilares y cadenas',
      'Conformación de muros con tableros estructurales OSB',
      'Envolvente: aislación térmica, barreras hidrófugas y sellos',
    ],
    obras: ['muro-perimetral', 'maitencillo'],
  },
  {
    slug: 'fundaciones',
    nombre: 'Fundaciones y hormigón armado',
    obra: 'Fundaciones',
    foto: {
      archivo: 'fundaciones/p08.jpg',
      alt: 'Moldajes de madera y armaduras de pilares listos para hormigonar.',
    },
    resumen:
      'Fundaciones ejecutadas en una secuencia controlada, con verificación topográfica de cada etapa e inspección de excavaciones y armaduras antes del hormigonado.',
    alcance: [
      'Preparación de superficie y trazado topográfico',
      'Excavación de zapatas y vigas de fundación',
      'Emplantillado de hormigón',
      'Armaduras de acero según los planos estructurales',
      'Encofrados y moldajes',
      'Hormigón premezclado con vibrado de inmersión',
      'Curado, desmolde y recepción',
    ],
    obras: ['fundaciones', 'muro-perimetral'],
  },
  {
    slug: 'estructuras-madera-sip',
    nombre: 'Estructuras en madera y paneles SIP',
    obra: 'Maitencillo',
    foto: {
      archivo: 'maitencillo/p05.jpg',
      alt: 'Estructura de tabiquería y techumbre de madera sobre la plataforma elevada.',
    },
    resumen:
      'Sistemas livianos sobre pilotes: tabiquería tradicional en madera estructural o paneles SIP certificados, que reducen los tiempos de ejecución y mejoran el desempeño térmico.',
    alcance: [
      'Fundaciones y plataformas elevadas sobre pilotes',
      'Tabiquería de madera estructural tratada',
      'Montaje de paneles SIP certificados',
      'Estructura de techumbre en madera dimensionada',
      'Encuentros técnicos para la continuidad térmica y la transmisión de cargas',
    ],
    obras: ['quirilluca', 'maitencillo'],
  },
  {
    slug: 'instalaciones',
    nombre: 'Instalaciones',
    obra: 'Quirilluca',
    foto: {
      archivo: 'quirilluca/p13.jpg',
      alt: 'Canalizaciones eléctricas tendidas sobre la estructura de techumbre.',
    },
    resumen:
      'Instalaciones eléctricas y sanitarias integradas al sistema constructivo, conforme a la normativa vigente y pensadas para facilitar mantenciones y ampliaciones.',
    alcance: [
      'Instalación eléctrica según normativa SEC',
      'Circuitos independientes con protecciones diferenciales y automáticas',
      'Canalizaciones embutidas en tabiques',
      'Redes de agua potable y evacuación de aguas servidas',
    ],
    obras: ['maitencillo', 'quirilluca'],
  },
  {
    slug: 'terminaciones',
    nombre: 'Terminaciones',
    obra: 'Quirilluca',
    foto: {
      archivo: 'quirilluca/p22-b.jpg',
      alt: 'Living terminado con piso SPC, apliques de muro, lámpara colgante y ventanas altas enmarcadas en madera.',
    },
    resumen:
      'Terminaciones interiores y exteriores de alto estándar, con materiales de fácil mantención y alta durabilidad.',
    alcance: [
      'Revestimientos exteriores de panel microondulado de zinc y madera',
      'Pisos SPC y de madera',
      'Porcelanatos y cubiertas de cuarzo',
      'Ventanas termopanel y carpinterías',
      'Mobiliario a medida, pintura e iluminación',
    ],
    obras: ['quirilluca', 'maitencillo'],
  },
  {
    // TODO: confirmar con el cliente qué maquinaria tiene y para qué faenas.
    slug: 'maquinaria',
    nombre: 'Maquinaria especializada',
    obra: 'Quirilluca',
    foto: {
      archivo: 'quirilluca/p14-a.jpg',
      alt: 'Equipo de perforación operando en la obra de Quirilluca.',
    },
    resumen:
      'Maquinaria propia para excavaciones, perforaciones y faenas de obra, coordinada con la planificación de cada etapa para cumplir los plazos.',
    alcance: [
      'Excavación de fundaciones y zanjas',
      'Perforación para pilotes',
      'Apoyo a hormigonados y montajes',
    ],
    obras: ['quirilluca', 'fundaciones'],
  },
  {
    slug: 'mano-de-obra',
    nombre: 'Mano de obra calificada',
    obra: 'Quirilluca',
    foto: {
      archivo: 'quirilluca/p19-b.jpg',
      alt: 'Maestros armando la estructura de la terraza con una sierra ingletadora, junto a la fachada de zinc.',
    },
    resumen:
      'Cuadrillas de maestros especializados por partida. Profesionalizar la mano de obra calificada es una de las preocupaciones centrales de HBMC.',
    alcance: [
      'Carpintería para estructuras de madera y paneles SIP',
      'Albañilería y enfierradura para obra gruesa',
      'Instalaciones y terminaciones',
      'Supervisión en terreno',
    ],
    obras: ['quirilluca', 'maitencillo'],
  },
];

export const metodo =
  'Ejecutamos por fases, desde el trazado hasta la recepción, con control de niveles, alineamientos y especificaciones en cada etapa y en coordinación con el equipo del proyecto.';

/** El método en cinco etapas, resumido de las fases de las obras del portafolio. */
export const etapas: readonly { nombre: string; detalle: string }[] = [
  {
    nombre: 'Trazado',
    detalle: 'Replanteo topográfico de ejes, niveles y alineamientos según los planos del proyecto.',
  },
  {
    nombre: 'Fundaciones',
    detalle:
      'Excavaciones, armaduras, moldajes y hormigonado, con inspección antes de cada vaciado.',
  },
  {
    nombre: 'Estructura',
    detalle:
      'Muros, tabiquería o paneles SIP y techumbre, con encuentros que aseguran la transmisión de cargas.',
  },
  {
    nombre: 'Envolvente e instalaciones',
    detalle:
      'Aislación térmica, barreras hidrófugas e instalaciones integradas al sistema constructivo.',
  },
  {
    nombre: 'Terminaciones y recepción',
    detalle:
      'Terminaciones interiores y exteriores, y verificación final de niveles, alineamientos y especificaciones.',
  },
];
