export function formatPublishedAt(iso: string, locale: 'en' | 'es'): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;

  const localeTag = locale === 'es' ? 'es' : 'en';
  const parts = new Intl.DateTimeFormat(localeTag, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).formatToParts(date);

  const monthRaw = parts.find((p) => p.type === 'month')?.value ?? '';
  const day = parts.find((p) => p.type === 'day')?.value ?? '';
  const year = parts.find((p) => p.type === 'year')?.value ?? '';
  const month = monthRaw.replace(/\./g, '').toUpperCase();

  return `${month} ${day}, ${year}`;
}
