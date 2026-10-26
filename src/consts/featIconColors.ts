// Color de los íconos de las tarjetas de proyectos y servicios (FeatsCards, LandingCard), por posición:
// morado, naranja y celeste; se repite cada tres tarjetas.
export const FEAT_ICON_COLORS = ['bg-[#AC4FC6]', 'bg-[#F26B21]', 'bg-secondary'];

export function getFeatIconColor(index: number) {
  return FEAT_ICON_COLORS[index % FEAT_ICON_COLORS.length];
}
