import type { Hero } from '@/types/strapi/Hero.ts';

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
  pricing: Pricing[];
}

export interface Pricing {
  id: number;
  title: string;
  price: number;
  paymentType: string;
  perks: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
