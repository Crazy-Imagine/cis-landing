type UiRoot = typeof import('@/i18n/ui').ui;

export type UiTextKey = keyof UiRoot['en'];

export interface ServiceNavRow {
  nameKey: UiTextKey;
  descKey: UiTextKey;
  /** Slug en inglés en Strapi (coincide con rutas estáticas conocidas) para emparejar por `key` y obtener el slug en ES */
  resolveByEnSlug?: string;
  /** Ruta interna (con / inicial) si no hay entrada en Strapi */
  fallbackPath?: string;
}

export const SERVICES_NAV_MENU: ServiceNavRow[] = [
  {
    nameKey: 'common.custom-development',
    descKey: 'common.custom-development-description',
    resolveByEnSlug: 'tailored-web-development-service',
  },
  {
    nameKey: 'common.staff-augmentation',
    descKey: 'common.staff-augmentation-description',
    resolveByEnSlug: 'staff-augmentation',
  },
  {
    nameKey: 'common.mobile-apps',
    descKey: 'common.mobile-apps-description',
    resolveByEnSlug: 'mobile-application-development',
  },
  {
    nameKey: 'common.crazy-partner-program',
    descKey: 'common.crazy-partner-program-description',
    resolveByEnSlug: 'crazy-partner-program',
  },
  {
    nameKey: 'common.outsourcing',
    descKey: 'common.outsourcing-description',
    resolveByEnSlug: 'outsourcing',
  },
  {
    nameKey: 'common.odoo',
    descKey: 'common.odoo-description',
    resolveByEnSlug: 'odoo',
  },
  {
    nameKey: 'common.ai-agents',
    descKey: 'common.ai-agents-description',
    resolveByEnSlug: 'ai-agents',
  },
];
