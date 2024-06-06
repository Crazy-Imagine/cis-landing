import type { Hero } from '@/types/strapi/Hero.ts';

export interface Mission {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  title_mission: string;
  description_mission: string;
  title_vission: string;
  description_vission: null;
  subtitle_vission: string;
  title_company_value: string;
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
