import type { Hero } from '@/types/strapi/Hero.ts';

export interface PageInfo {
  data: Data;
  meta: Meta;
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

export interface SEO {
  id: number;
  keywords: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Meta {}
