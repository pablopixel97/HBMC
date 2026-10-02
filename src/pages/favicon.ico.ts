// Para los navegadores y lectores que no usan el SVG y piden /favicon.ico por defecto.
import type { APIRoute } from 'astro';
import { PESTANA, icoIcono } from '../lib/favicon';

export const GET: APIRoute = async () =>
  new Response(await icoIcono([16, 32, 48], PESTANA), { headers: { 'Content-Type': 'image/x-icon' } });
