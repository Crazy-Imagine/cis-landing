import type { SEO } from '@/types/strapi/SEO.ts';
import type { Hero } from '@/types/strapi/Hero.ts';

export interface PrivacyPolicy {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  privacyPolicy: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  seo: SEO;
  hero: Hero;
}
