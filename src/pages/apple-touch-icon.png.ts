// Ícono al agregar el sitio a la pantalla de inicio del iPhone.
import type { APIRoute } from 'astro';
import { IPHONE, pngIcono } from '../lib/favicon';

export const GET: APIRoute = async () =>
  new Response(await pngIcono(180, IPHONE), { headers: { 'Content-Type': 'image/png' } });
