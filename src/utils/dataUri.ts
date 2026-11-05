import { Buffer } from 'node:buffer';

// Descarga un archivo remoto (ej. un ícono del bucket de Strapi) y lo devuelve como `data:` URI.
// Sirve para usar imágenes de otro dominio en `mask` de CSS: el navegador pide las máscaras con CORS
// y el bucket no envía `Access-Control-Allow-Origin`, así que la imagen tiene que ir incrustada.
// Las páginas se generan en el build, así que la descarga ocurre una vez por ícono.
const cache = new Map<string, Promise<string>>();

async function download(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) return url;

    const contentType = response.headers.get('content-type') ?? 'application/octet-stream';
    const base64 = Buffer.from(await response.arrayBuffer()).toString('base64');

    return `data:${contentType};base64,${base64}`;
  } catch {
    // Si falla la descarga se usa la URL original: el ícono puede no verse, pero la página se genera.
    return url;
  }
}

export function toDataUri(url: string) {
  if (!cache.has(url)) cache.set(url, download(url));

  return cache.get(url)!;
}
