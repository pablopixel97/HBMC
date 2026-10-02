export const site = {
  nombre: 'HBMC',
  lema: 'Gestión y ejecución de obras',
  zona: 'V Región, Chile',
  descripcion:
    'Gestión y ejecución de obras para constructoras, oficinas de ingeniería y mandantes técnicos en la V Región, Chile.',
} as const;

// Datos del material más reciente (tarjeta T.P.HBMC.26 y PDFs de obras); confirmar con el cliente.
export const contacto = {
  telefono: '+56 9 6842 7880',
  email: 'companyhbmc@gmail.com',
  instagram: 'constructorahbmc',
} as const;

export const enlacesContacto = {
  telefono: `tel:${contacto.telefono.replaceAll(' ', '')}`,
  email: `mailto:${contacto.email}`,
  instagram: `https://www.instagram.com/${contacto.instagram}/`,
} as const;

export interface EnlaceNav {
  etiqueta: string;
  href: string;
}

// Mismo orden que el inicio: primero lo que HBMC ejecuta, después la prueba y luego quién es.
export const navegacion: readonly EnlaceNav[] = [
  { etiqueta: 'Servicios', href: '/servicios' },
  { etiqueta: 'Obras', href: '/obras' },
  { etiqueta: 'Nosotros', href: '/nosotros' },
  { etiqueta: 'Contacto', href: '/contacto' },
];
