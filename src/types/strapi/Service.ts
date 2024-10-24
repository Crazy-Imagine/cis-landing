import type { Hero } from '@/types/strapi/Hero.ts';
import type { SEO } from '@/types/strapi/SEO.ts';
import type { Pagination } from '@/types/Pagination.ts';

export interface ServiceCollection {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id: number;
  attributes: ServiceAttributes;
}

export interface ServiceAttributes {
  title: string;
  subTitle: string;
  description: string;
  slug: string;
  key: string;
  hero: Hero;
  seo: SEO;
  pricing: Pricing[];
}

export interface Pricing {
  id: number;
  title: string;
  price: number;
  paymentType: string;
  perks: string;
  isBetterOption: boolean;
}

export interface Meta {
  pagination: Pagination;
}
