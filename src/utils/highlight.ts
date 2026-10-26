const HIGHLIGHT_PATTERN = /\*\*(.+?)\*\*/gs;

const HIGHLIGHT_CLASS = 'text-primary-new';

/**
 * Envuelve en un <span> verde el texto entre `**` de un HTML ya renderizado (y por lo tanto ya escapado).
 * Lo usa `Typography` sobre su contenido, así que aplica a todos los títulos y textos del sitio.
 * Ej: "escalar con **Inteligencia Artificial**"
 */
export function highlightHtml(html: string) {
  return html.replace(
    HIGHLIGHT_PATTERN,
    (_, content: string) => `<span class="${HIGHLIGHT_CLASS}">${content}</span>`
  );
}

/** Quita los `**` para usos en texto plano: alt, aria-label, meta tags, etc. */
export function stripHighlight(text: string) {
  return text.replace(HIGHLIGHT_PATTERN, '$1');
}
