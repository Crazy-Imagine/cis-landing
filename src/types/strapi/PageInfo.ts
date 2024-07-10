import type { Hero } from '@/types/strapi/Hero.ts';
import type { SEO } from '@/types/strapi/SEO.ts';

export interface PageInfo {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  seo: SEO;
  hero: Hero;
}
