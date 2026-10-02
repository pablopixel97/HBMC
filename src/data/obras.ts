// Obras del portafolio, transcritas de los PDFs en HBMC/sources/ con las erratas corregidas.
// `null` = dato que no está en las fuentes y debe entregar el cliente; la web no lo muestra.

export type TipoObra = 'vivienda' | 'obra-gruesa';
export type EstadoObra = 'terminada' | 'en-ejecucion';

/** Foto en src/assets/obras/ (ver src/lib/fotos.ts). `alt` describe lo que se ve. */
export interface Foto {
  archivo: string;
  alt: string;
}

export interface Fase {
  titulo: string;
  foto: Foto;
  descripcion: string;
  partidas?: readonly string[];
}

export interface Especificacion {
  item: string;
  valor: string;
}

export interface Obra {
  slug: string;
  nombre: string;
  tipo: TipoObra;
  sistema: string;
  anio: number | null;
  estado: EstadoObra | null;
  ubicacion: string | null;
  superficieM2: number | null;
  cliente: string | null;
  portada: Foto;
  /** Fotos del resultado para la columna de imágenes del detalle; vacío si solo hay fotos de fases. */
  destacadas: readonly Foto[];
  resumen: string;
  fases: readonly Fase[];
  especificaciones: readonly Especificacion[];
}

export const tiposDeObra: Record<TipoObra, { tenue: string; fuerte: string }> = {
  vivienda: { tenue: 'Viviendas', fuerte: 'Unifamiliares' },
  'obra-gruesa': { tenue: 'Obra', fuerte: 'Gruesa' },
};

export const etiquetasEstado: Record<EstadoObra, string> = {
  terminada: 'Terminada',
  'en-ejecucion': 'En ejecución',
};

// El orden del arreglo es el orden en que se muestran.
export const obras: readonly Obra[] = [
  {
    slug: 'quirilluca',
    nombre: 'Quirilluca',
    tipo: 'vivienda',
    sistema: 'Paneles SIP sobre pilotes',
    anio: 2026,
    estado: 'terminada',
    ubicacion: 'Condominio Bosques de Quirilluca, V Región',
    superficieM2: 135,
    cliente: 'Privado',
    portada: {
      archivo: 'quirilluca/p02.jpg',
      alt: 'Fachada de la vivienda de Quirilluca de noche: revestimiento de zinc microondulado iluminado con apliques y pasarela de madera.',
    },
    destacadas: [
      {
        archivo: 'quirilluca/p29.jpg',
        alt: 'Fachada de zinc microondulado con ventanas enmarcadas en madera y pasarela de acceso, al atardecer.',
      },
      {
        archivo: 'quirilluca/p23-b.jpg',
        alt: 'Cocina terminada con isla de cuarzo, mobiliario gris y ventanas altas enmarcadas en madera.',
      },
      {
        archivo: 'quirilluca/p31.jpg',
        alt: 'Celosía de madera iluminada en el acceso, junto a la fachada de zinc, de noche.',
      },
    ],
    resumen:
      'Desarrollo y ejecución integral de una vivienda unifamiliar mediante un sistema constructivo industrializado en paneles SIP, con soluciones técnicas para optimizar el comportamiento térmico, estructural y la durabilidad de la edificación.',
    fases: [
      {
        titulo: 'Fundaciones y plataforma estructural',
        foto: {
          archivo: 'quirilluca/p03.jpg',
          alt: 'Entramado de piso de vigas de madera sobre pilotes, con pies derechos montados en el perímetro.',
        },
        partidas: [
          'Nivelación del terreno',
          'Replanteo estructural',
          'Fundación',
          'Entramado estructural',
          'Protección contra humedad',
        ],
        descripcion:
          'Ejecución de fundaciones y estructura base de la vivienda mediante sistema elevado, permitiendo una correcta nivelación del terreno y una adecuada ventilación del paquete estructural del piso. Se consideran tratamientos preventivos para la protección de la madera estructural y soluciones destinadas a evitar la transmisión de humedad desde el terreno.',
      },
      {
        titulo: 'Montaje de paneles SIP',
        foto: {
          archivo: 'quirilluca/p05.jpg',
          alt: 'Muros de paneles SIP montados sobre la plataforma, vistos desde arriba.',
        },
        partidas: [
          'Panel SIP estructural',
          'OSB estructural',
          'Núcleo aislante de alta densidad',
          'Sellos estructurales',
          'Uniones mecánicas certificadas',
        ],
        descripcion:
          'Montaje de paneles estructurales SIP certificados, permitiendo una elevada eficiencia térmica y una significativa reducción de tiempos de ejecución en comparación con sistemas tradicionales.',
      },
      {
        titulo: 'Estructura de techumbre',
        foto: {
          archivo: 'quirilluca/p07.jpg',
          alt: 'Equipo montando una cercha de madera sobre los muros de paneles SIP.',
        },
        partidas: [
          'Cerchas',
          'Vigas',
          'Costaneras',
          'Madera estructural',
          'Escuadrías',
          'Anclajes',
          'Rigidización',
        ],
        descripcion:
          'Desarrollo de la estructura de techumbre mediante madera estructural dimensionada, diseñada para proporcionar rigidez estructural, ventilación adecuada y óptimo comportamiento frente a las condiciones climáticas de la zona costera.',
      },
      {
        titulo: 'Conformación de muros',
        foto: {
          archivo: 'quirilluca/p09.jpg',
          alt: 'Pasillo entre muros de paneles SIP, con la estructura de techumbre encima.',
        },
        partidas: [
          'Muros estructurales',
          'Encuentros constructivos',
          'Aperturas para ventanas',
          'Refuerzos estructurales',
          'Rigidización perimetral',
        ],
        descripcion:
          'La conformación estructural considera encuentros técnicos especialmente diseñados para garantizar la continuidad térmica y la correcta transmisión de cargas hacia las fundaciones.',
      },
      {
        titulo: 'Envolvente y aislación térmica',
        foto: {
          archivo: 'quirilluca/p11.jpg',
          alt: 'Muro cubierto con membrana hidrófuga, con vanos para ventanas altas.',
        },
        partidas: [
          'Aislaciones',
          'Barreras',
          'Impermeabilizaciones',
          'Membranas',
          'Barreras hidrófugas',
          'Aislantes',
          'Protección UV',
        ],
        descripcion:
          'La vivienda incorpora un sistema continuo de aislación térmica destinado a optimizar el desempeño energético de la envolvente y mejorar significativamente el confort interior.',
      },
      {
        titulo: 'Instalaciones',
        foto: {
          archivo: 'quirilluca/p13.jpg',
          alt: 'Canalizaciones eléctricas tendidas sobre la estructura de techumbre.',
        },
        partidas: [
          'Canalizaciones eléctricas embutidas',
          'Circuitos independientes',
          'Protecciones diferenciales',
          'Tablero eléctrico',
          'Iluminación LED',
          'Agua potable',
          'Alcantarillado',
          'Ventilaciones sanitarias',
          'Artefactos certificados',
        ],
        descripcion:
          'Ejecución de las instalaciones sanitarias y eléctricas conforme a las normativas vigentes, contemplando soluciones que facilitan futuras mantenciones y ampliaciones.',
      },
      {
        // En el PDF las fases 07 y 08 se llaman igual ("Terminaciones"); se distinguen aquí.
        titulo: 'Terminaciones interiores',
        foto: {
          archivo: 'quirilluca/p20-b.jpg',
          alt: 'Instalación del mobiliario de cocina sobre el piso SPC.',
        },
        partidas: ['Cocina', 'Baños', 'Lavandería', 'Pisos', 'Puertas', 'Ventanas'],
        descripcion:
          'Desarrollo de terminaciones interiores de alto estándar, privilegiando materialidades de fácil mantención, elevada durabilidad y una estética contemporánea: piso SPC, cuarzo, porcelanatos, perfilería, carpinterías, pintura e iluminación.',
      },
      {
        titulo: 'Terminaciones finales',
        foto: {
          archivo: 'quirilluca/p21.jpg',
          alt: 'Puerta de acceso de madera con luz lateral, enmarcada en el revestimiento de zinc.',
        },
        partidas: [
          'Pisos SPC',
          'Porcelanatos',
          'Cubiertas de cuarzo',
          'Mobiliario en melamina',
          'Griferías',
          'Iluminación arquitectónica',
          'Ventanas termopanel',
        ],
        descripcion:
          'El resultado final corresponde a una vivienda contemporánea que integra eficiencia energética, diseño arquitectónico y soluciones constructivas desarrolladas bajo los estándares técnicos de HBMC.',
      },
    ],
    especificaciones: [
      { item: 'Sistema constructivo', valor: 'Panel SIP' },
      { item: 'Estructura de techumbre', valor: 'Madera estructural' },
      { item: 'Cubierta', valor: 'Membrana asfáltica' },
      { item: 'Ventanas', valor: 'Termopanel' },
      { item: 'Revestimientos', valor: 'Panel microondulado de zinc' },
      { item: 'Pisos', valor: 'SPC' },
      { item: 'Cocina', valor: 'Cubierta de cuarzo' },
      { item: 'Baños', valor: 'Porcelanato y griferías de alto estándar' },
      { item: 'Aislación', valor: 'Lana mineral + membrana hidrófuga' },
      { item: 'Instalación eléctrica', valor: 'Normativa SEC' },
      { item: 'Instalación sanitaria', valor: 'Normativa vigente' },
      { item: 'Eficiencia térmica', valor: 'Alta prestación mediante sistema constructivo' },
    ],
  },
  {
    slug: 'maitencillo',
    nombre: 'Maitencillo',
    tipo: 'vivienda',
    sistema: 'Tabiquería en madera sobre pilotes',
    anio: 2024,
    estado: 'terminada',
    ubicacion: 'Pasa Frutillar, Maitencillo, V Región',
    // El PDF indica 92 m² para un encargo de dos viviendas; confirmar si es por vivienda o total.
    superficieM2: 92,
    cliente: 'Privado',
    portada: {
      archivo: 'maitencillo/p27.jpg',
      alt: 'Vivienda de Maitencillo terminada, al atardecer: revestimiento grafito, ventanas altas y terraza de madera sobre pilotes.',
    },
    destacadas: [
      {
        archivo: 'maitencillo/p02.jpg',
        alt: 'Las dos viviendas de Maitencillo sobre pilotes, con el cerro de fondo.',
      },
      {
        archivo: 'maitencillo/p16.jpg',
        alt: 'Interior con vigas de madera a la vista, ventanas altas y revestimiento de madera natural.',
      },
      {
        archivo: 'maitencillo/p22.jpg',
        alt: 'Vista aérea de una de las viviendas con revestimiento grafito, terraza elevada y escalera de acceso.',
      },
    ],
    resumen:
      'Desarrollo y ejecución integral de dos viviendas unifamiliares bajo criterios de eficiencia energética, rapidez constructiva y alto estándar de terminaciones, con tabiquería tradicional en madera sobre pilotes y soluciones para optimizar el desempeño estructural, térmico y la durabilidad de la envolvente.',
    fases: [
      {
        titulo: 'Fundaciones y plataforma estructural',
        foto: {
          archivo: 'maitencillo/p03.jpg',
          alt: 'Trazado de las fundaciones con estacas y niveletas sobre el terreno.',
        },
        partidas: [
          'Trazado y nivelación',
          'Excavación de fundaciones',
          'Hormigonado de apoyos estructurales',
          'Instalación de pilotes',
          'Montaje de vigas principales y secundarias',
          'Arriostramientos temporales y definitivos',
          'Instalación de plataforma estructural',
        ],
        descripcion:
          'La etapa inicial contempló el replanteo topográfico de las viviendas mediante ejes de referencia y niveles de control, permitiendo emplazar la construcción en conformidad con la pendiente natural del terreno. Se ejecutaron fundaciones aisladas de hormigón armado destinadas a recibir un sistema de pilotes estructurales de madera impregnada, elevando la edificación respecto del terreno natural. Esta solución permitió minimizar intervenciones en el sitio, optimizar el comportamiento frente a humedad ascendente y adaptarse eficientemente a las condiciones topográficas existentes. Posteriormente, se desarrolló la plataforma estructural mediante vigas maestras y secundarias.',
      },
      {
        titulo: 'Montaje de tabiquería tradicional en madera',
        foto: {
          archivo: 'maitencillo/p05.jpg',
          alt: 'Tabiquería de madera levantada sobre la plataforma elevada.',
        },
        partidas: [
          'Fabricación de paneles estructurales',
          'Levantamiento de tabiquería perimetral',
          'Montaje de tabiques interiores',
          'Instalación de dinteles y refuerzos',
          'Arriostramientos estructurales',
          'Verificación de plomos y escuadrías',
        ],
        descripcion:
          'La estructura vertical fue desarrollada mediante tabiquería tradicional de madera, ejecutada con piezas estructurales dimensionadas y previamente tratadas, conformando un sistema liviano de alta eficiencia constructiva. Cada panel fue prefabricado y posteriormente montado en obra, incorporando pies derechos, soleras superiores e inferiores, cadenetas y elementos de rigidización, permitiendo controlar deformaciones y garantizar el adecuado comportamiento sísmico de la estructura. Se consideró la conformación de vanos para puertas y ventanas mediante dinteles reforzados y refuerzos estructurales localizados, asegurando la correcta transmisión de cargas hacia los elementos portantes.',
      },
      {
        titulo: 'Estructura de techumbre',
        foto: {
          archivo: 'maitencillo/p07.jpg',
          alt: 'Estructura de techumbre de madera a un agua, contra el cielo.',
        },
        partidas: [
          'Fabricación y montaje de cerchas',
          'Instalación de vigas de techumbre',
          'Ejecución de costaneras',
          'Construcción de aleros',
          'Arriostramientos horizontales',
          'Nivelación y alineamiento estructural',
        ],
        descripcion:
          'La cubierta fue diseñada con una pendiente de un agua, optimizando la evacuación de aguas lluvias y otorgando una identidad arquitectónica contemporánea acorde al entorno costero. La estructura de techumbre fue ejecutada mediante vigas y cerchas de madera estructural, complementadas con costaneras y elementos de arriostramiento longitudinal. Se incorporaron aleros perimetrales para proteger la envolvente de la exposición solar y de la acción directa de las precipitaciones. El sistema fue concebido para soportar cargas permanentes, sobrecargas de mantención y acciones de viento características del borde costero de la V Región.',
      },
      {
        titulo: 'Conformación de muros',
        foto: {
          archivo: 'maitencillo/p09.jpg',
          alt: 'Muros con tableros OSB y tabiquería interior sobre la plataforma.',
        },
        partidas: [
          'Instalación de revestimiento estructural',
          'Fijación mecánica de paneles OSB',
          'Sellado de juntas',
          'Ajustes de vanos',
          'Revisión de alineamientos',
        ],
        descripcion:
          'Una vez ejecutada la estructura principal, se conformaron los muros mediante tableros estructurales OSB en ambas caras de los paneles, otorgando rigidez diafragmática al conjunto y mejorando el comportamiento frente a cargas horizontales. La modulación de los tableros respetó juntas de dilatación y fijaciones mecánicas según especificaciones técnicas, garantizando continuidad estructural y una adecuada transferencia de esfuerzos. Esta etapa consolidó la volumetría definitiva de las viviendas y definió los distintos recintos interiores.',
      },
      {
        titulo: 'Envolvente y aislación térmica',
        foto: {
          archivo: 'maitencillo/p11.jpg',
          alt: 'Escalera de acceso y muros con barrera de humedad bajo los aleros de madera.',
        },
        partidas: [
          'Instalación de aislación térmica',
          'Barrera de humedad',
          'Sellos de hermeticidad',
          'Protección de encuentros',
          'Impermeabilización de cubierta',
          'Verificación de continuidad térmica',
        ],
        descripcion:
          'Para mejorar el desempeño energético de las viviendas se incorporó un sistema de aislación térmica continua en muros y cubierta, complementado con barreras hidrófugas y sellos perimetrales. La envolvente fue diseñada para reducir pérdidas energéticas, controlar condensaciones y aumentar el confort interior durante todo el año, considerando la condición climática de Maitencillo. Se incorporaron además soluciones de impermeabilización y ventilación de fachada para prolongar la vida útil de los materiales expuestos.',
      },
      {
        titulo: 'Instalaciones',
        foto: {
          archivo: 'maitencillo/p13.jpg',
          alt: 'Zanja de drenaje con tuberías corrugadas sobre gravilla, junto a la vivienda.',
        },
        partidas: ['Instalación eléctrica', 'Instalación sanitaria', 'Iluminación'],
        descripcion:
          'Las instalaciones se ejecutaron integradas al sistema constructivo, con canalizaciones embutidas al interior de los tabiques y respetando la normativa vigente. La instalación eléctrica contempla circuitos independientes para iluminación, enchufes y equipos de mayor consumo, con protecciones diferenciales y automáticas en tablero general. El sistema sanitario incluyó redes de agua potable y evacuación de aguas servidas bajo la plataforma elevada de la vivienda, facilitando futuras labores de mantención.',
      },
      {
        titulo: 'Terminaciones',
        foto: {
          archivo: 'maitencillo/p20-b.jpg',
          alt: 'Revestimiento de zinc microondulado y marcos de madera de los vanos, junto a la terraza.',
        },
        partidas: ['Fachada', 'Cocina', 'Living', 'Baño', 'Dormitorio principal'],
        descripcion:
          'Fachada con revestimiento exterior de tonalidad grafito y madera natural expuesta, aleros pronunciados y terraza elevada como extensión de los espacios interiores. Cocina con mobiliario a medida y superficies de alta resistencia; living abierto con amplios ventanales; baño con revestimientos resistentes a la humedad y artefactos de bajo consumo; dormitorio principal orientado a las vistas y a la iluminación natural.',
      },
    ],
    especificaciones: [
      { item: 'Sistema constructivo', valor: 'Tabiquería tradicional (madera)' },
      { item: 'Estructura de techumbre', valor: 'Madera estructural' },
      { item: 'Cubierta', valor: 'Teja asfáltica' },
      { item: 'Ventanas', valor: 'Termopanel' },
      { item: 'Revestimientos', valor: 'Panel microondulado de zinc' },
      { item: 'Pisos', valor: 'Madera' },
      { item: 'Cocina', valor: 'Cubierta de cuarzo' },
      { item: 'Baño', valor: 'Porcelanato y griferías de alto estándar' },
      { item: 'Aislación', valor: 'Poliestireno expandido (EPS) + membrana hidrófuga' },
      { item: 'Instalación eléctrica', valor: 'Normativa SEC' },
      { item: 'Instalación sanitaria', valor: 'Normativa vigente' },
      { item: 'Eficiencia térmica', valor: 'Alta prestación mediante sistema constructivo' },
    ],
  },
  {
    slug: 'muro-perimetral',
    nombre: 'Muro perimetral',
    tipo: 'obra-gruesa',
    sistema: 'Albañilería confinada',
    // Año tomado del nombre del archivo (MURO.PERIMETRAL.HBMC.2026.pdf).
    anio: 2026,
    estado: null,
    ubicacion: null,
    superficieM2: null,
    cliente: null,
    portada: {
      archivo: 'muro-perimetral/p02.jpg',
      alt: 'Moldajes de madera y armaduras de pilares del muro perimetral.',
    },
    destacadas: [],
    resumen:
      'Muro perimetral de albañilería confinada con elementos de hormigón armado, diseñado para proporcionar estabilidad estructural, durabilidad y un adecuado comportamiento frente a las solicitaciones propias de la edificación. Cada etapa se ejecutó conforme a las especificaciones del proyecto estructural y a criterios de buena práctica constructiva.',
    fases: [
      {
        titulo: 'Trazado y excavación',
        foto: {
          archivo: 'muro-perimetral/p03.jpg',
          alt: 'Trazado del eje del muro con niveletas y excavación de la fundación corrida.',
        },
        descripcion:
          'Replanteo topográfico del eje del muro, materializando niveles, alineamientos y dimensiones establecidas en los planos del proyecto. Luego se ejecutan las excavaciones de las fundaciones corridas y elementos estructurales asociados, verificando las cotas de desplante y las condiciones del terreno natural antes de iniciar las obras de hormigón.',
      },
      {
        titulo: 'Fundaciones',
        foto: {
          archivo: 'muro-perimetral/p04.jpg',
          alt: 'Armadura de acero para la fundación del muro, montada sobre caballetes.',
        },
        descripcion:
          'Fundaciones de hormigón armado destinadas a transmitir las cargas del muro hacia el terreno de fundación. Contempla la preparación de la base, la colocación de armaduras de acero de refuerzo y el hormigonado de los elementos estructurales, garantizando la capacidad resistente y la estabilidad del sistema constructivo.',
      },
      {
        titulo: 'Sobrecimientos',
        foto: {
          archivo: 'muro-perimetral/p05.jpg',
          alt: 'Sobrecimientos de hormigón armado con armaduras de pilares en espera.',
        },
        descripcion:
          'Sobrecimientos de hormigón armado que elevan el nivel de apoyo del muro respecto del terreno natural, protegiéndolo de la humedad ascendente y proporcionando una base estructural continua y nivelada. Se consideran las armaduras de continuidad necesarias para vincular los pilares y elementos de confinamiento proyectados.',
      },
      {
        titulo: 'Elevación de muros de albañilería',
        foto: {
          archivo: 'muro-perimetral/p06.jpg',
          alt: 'Elevación del muro de albañilería de bloque cerámico junto a las armaduras de los pilares.',
        },
        descripcion:
          'Muros de albañilería de ladrillo fiscal o bloque cerámico estructural, respetando las modulaciones, espesores y aparejos definidos en el proyecto. Las unidades se colocan con mortero de pega dosificado para uso estructural, controlando niveles, aplomos y espesores uniformes de juntas horizontales y verticales.',
      },
      {
        titulo: 'Confinamiento estructural (pilares y cadenas)',
        foto: {
          archivo: 'muro-perimetral/p07.jpg',
          alt: 'Armadura de confinamiento dentro del moldaje, sobre la albañilería de bloque cerámico.',
        },
        descripcion:
          'Los muros se refuerzan con elementos de confinamiento en hormigón armado, pilares verticales y cadenas horizontales, que mejoran el comportamiento del conjunto frente a esfuerzos de compresión, flexión y acciones sísmicas. Se instalan armaduras de acero y moldajes, y luego se hormigonan los elementos, asegurando su correcta integración con la albañilería.',
      },
      {
        titulo: 'Hormigonado de elementos de confinamiento',
        foto: {
          archivo: 'muro-perimetral/p08.jpg',
          alt: 'Hormigonado de la cadena de confinamiento sobre el muro.',
        },
        descripcion:
          'Vaciado del hormigón estructural en pilares y cadenas mediante procedimientos controlados de colocación y compactación mecánica, con el recubrimiento adecuado de las armaduras y continuidad estructural entre fundaciones, sobrecimientos y elementos verticales del muro.',
      },
      {
        titulo: 'Curado y desmolde',
        foto: {
          archivo: 'muro-perimetral/p09.jpg',
          alt: 'Muro hormigonado con moldajes aún instalados en el extremo.',
        },
        descripcion:
          'Curado de los elementos hormigonados para asegurar el correcto desarrollo de las resistencias mecánicas y minimizar retracciones superficiales. Cumplidos los tiempos mínimos, se retiran los moldajes y se realiza la inspección visual y dimensional de los elementos ejecutados.',
      },
      {
        titulo: 'Terminaciones y sellos',
        foto: {
          archivo: 'muro-perimetral/p10.jpg',
          alt: 'Muro de albañilería terminado, con pilares de confinamiento estucados.',
        },
        descripcion:
          'Terminaciones superficiales del muro: reparación de eventuales imperfecciones, sellado de encuentros y aplicación de estucos o revestimientos proyectados. Se verifican la alineación del muro, los niveles terminados y las condiciones para la posterior aplicación de pinturas o tratamientos de protección superficial.',
      },
    ],
    especificaciones: [],
  },
  {
    slug: 'fundaciones',
    nombre: 'Fundaciones',
    tipo: 'obra-gruesa',
    sistema: 'Hormigón armado',
    anio: null,
    estado: null,
    ubicacion: null,
    superficieM2: null,
    cliente: null,
    portada: {
      archivo: 'fundaciones/p02.jpg',
      alt: 'Armaduras de pilares y vigas de fundación con moldajes de madera en la excavación.',
    },
    destacadas: [],
    resumen:
      'Fundaciones de hormigón armado ejecutadas mediante un proceso constructivo secuencial y controlado, con criterios estructurales, topográficos y de calidad en obra. Cada etapa se desarrolló conforme a las especificaciones técnicas del proyecto, asegurando la correcta transmisión de cargas al terreno y la durabilidad del sistema estructural.',
    fases: [
      {
        titulo: 'Preparación de superficie',
        foto: {
          archivo: 'fundaciones/p03.jpg',
          alt: 'Compactación de la superficie con rodillo vibratorio.',
        },
        descripcion:
          'Labores preliminares para habilitar el área de trabajo: despeje del terreno y retiro de material orgánico y elementos ajenos al proyecto. Se realiza la nivelación inicial de la superficie y se habilitan los accesos para maquinaria, equipos y personal de obra.',
      },
      {
        titulo: 'Limpieza y trazado topográfico',
        foto: {
          archivo: 'fundaciones/p04.jpg',
          alt: 'Trazado topográfico con estación total y marcas de cal sobre el terreno.',
        },
        descripcion:
          'Replanteo general del proyecto con instrumentos topográficos de precisión, materializando los ejes estructurales, niveles y dimensiones de los planos de fundaciones. Permite verificar alineamientos, escuadrías y cotas de excavación, garantizando la correcta ubicación de cada elemento estructural.',
      },
      {
        titulo: 'Excavación de fundaciones',
        foto: {
          archivo: 'fundaciones/p05.jpg',
          alt: 'Excavación de zapatas y vigas de fundación, con verificación de profundidad.',
        },
        descripcion:
          'Excavaciones de zapatas, vigas de fundación y elementos estructurales enterrados, respetando las dimensiones y profundidades especificadas en la ingeniería. Las excavaciones se inspeccionan antes de su recepción, verificando la capacidad portante del terreno natural y la ausencia de material suelto o contaminado.',
      },
      {
        titulo: 'Emplantillado de hormigón',
        foto: {
          archivo: 'fundaciones/p06.jpg',
          alt: 'Emplantillado de hormigón con los ejes y las armaduras marcados en color.',
        },
        descripcion:
          'Capa de hormigón de limpieza de baja resistencia que proporciona una superficie nivelada y estable para el montaje de las armaduras. Evita el contacto directo del acero con el terreno y asegura el correcto recubrimiento del hormigón estructural.',
      },
      {
        titulo: 'Armadura de acero de refuerzo',
        foto: {
          archivo: 'fundaciones/p07.jpg',
          alt: 'Armaduras de acero confeccionadas sobre caballetes.',
        },
        descripcion:
          'Confección y montaje de armaduras según los planos estructurales, considerando diámetros, separaciones, longitudes de anclaje y empalmes especificados por la ingeniería. Se verifica el posicionamiento con separadores y distanciadores, garantizando los recubrimientos mínimos para la protección contra agentes ambientales y la adherencia con el hormigón.',
      },
      {
        titulo: 'Encofrado y moldajes',
        foto: {
          archivo: 'fundaciones/p08.jpg',
          alt: 'Moldajes de madera y armaduras de pilares listos para hormigonar.',
        },
        descripcion:
          'Instalación de moldajes perimetrales y elementos de confinamiento para vigas de fundación y sobrecimientos, asegurando su estabilidad dimensional durante el hormigonado. Los encofrados se alinean y rigidizan para mantener las tolerancias geométricas del proyecto estructural.',
      },
      {
        titulo: 'Hormigonado',
        foto: {
          archivo: 'fundaciones/p09.jpg',
          alt: 'Hormigonado con camión bomba sobre las armaduras de fundación.',
        },
        descripcion:
          'Hormigón premezclado de la resistencia especificada en el diseño estructural, con colocación continua y compactación mecánica mediante vibradores de inmersión, eliminando vacíos y garantizando una adecuada densificación del material.',
      },
      {
        titulo: 'Curado de hormigón',
        foto: {
          archivo: 'fundaciones/p10.jpg',
          alt: 'Fundaciones recién hormigonadas en curado, con los moldajes aún instalados.',
        },
        descripcion:
          'Labores de curado para controlar la pérdida prematura de humedad durante el fraguado inicial, asegurando el desarrollo de las resistencias mecánicas del hormigón y minimizando fisuras por retracción superficial.',
      },
      {
        titulo: 'Desmolde y recepción de fundaciones',
        foto: {
          archivo: 'fundaciones/p11.jpg',
          alt: 'Fundaciones desmoldadas, con las armaduras de pilares a la espera de las etapas superiores.',
        },
        descripcion:
          'Cumplidos los tiempos mínimos de desarrollo de resistencia, se retiran moldajes y elementos auxiliares. Luego se inspeccionan visual y dimensionalmente las fundaciones, verificando niveles, alineamientos, terminaciones superficiales y la conformación de los elementos antes de iniciar las etapas superiores.',
      },
    ],
    especificaciones: [],
  },
];
