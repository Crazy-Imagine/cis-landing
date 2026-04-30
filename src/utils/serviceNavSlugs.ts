import fetchApi from '@/lib/strapi';
import type { ServiceCollection } from '@/types/strapi/Service';

/** Por slug EN de la entrada, devuelve pares { en, es } de slugs (misma `key` en Strapi). */
export async function getServiceSlugPairsByEnSlug(): Promise<
  Map<string, { en: string; es: string }>
> {
  const map = new Map<string, { en: string; es: string }>();
  try {
    const [enCollection, esCollection] = await Promise.all([
      fetchApi<ServiceCollection>({
        endpoint: 'services',
        params: {
          locale: 'en',
          fields: ['slug', 'key'],
          publicationState: 'live',
        },
      }),
      fetchApi<ServiceCollection>({
        endpoint: 'services',
        params: {
          locale: 'es',
          fields: ['slug', 'key'],
          publicationState: 'live',
        },
      }),
    ]);

    for (const { attributes } of enCollection.data) {
      const esRow = esCollection.data.find((r) => r.attributes.key === attributes.key);
      if (esRow) {
        map.set(attributes.slug, { en: attributes.slug, es: esRow.attributes.slug });
      }
    }
  } catch {
    // Sin Strapi en build/dev: se usará slug EN como respaldo
  }
  return map;
}

export function resolveServicePath(
  slugPairs: Map<string, { en: string; es: string }>,
  lang: 'en' | 'es',
  resolveByEnSlug: string | undefined,
  fallbackPath?: string
): string {
  if (resolveByEnSlug) {
    const pair = slugPairs.get(resolveByEnSlug);
    const slug = pair ? (lang === 'en' ? pair.en : pair.es) : resolveByEnSlug;
    return `/services/${slug}`;
  }
  return fallbackPath ?? '/services';
}
