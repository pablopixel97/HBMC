import type { APIRoute } from 'astro';
import { PESTANA, svgIcono } from '../lib/favicon';

export const GET: APIRoute = () =>
  new Response(svgIcono(PESTANA), { headers: { 'Content-Type': 'image/svg+xml' } });
