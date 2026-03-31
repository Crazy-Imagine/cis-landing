import type { Image } from './Article';
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
  mainContent: MainContent;
  features: Features;
  cta: CTA;
}

export interface CTA {
  id: number;
  title: string;
  subtitle: string;
  caption: string;
}

export interface Features {
  id: number;
  title: string;
  subtitle: string;
  feats: Feats[];
}

export interface Feats {
  id: number;
  title: string;
  content: string;
  icon: Image;
}

export interface MainContent {
  id: number;
  title: string;
  description: string;
  image: Image;
  caption?: string;
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
