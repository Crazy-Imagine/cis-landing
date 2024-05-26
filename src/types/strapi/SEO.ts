export interface SEO {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  seo: SEOClass;
}

export interface SEOClass {
  id: number;
  keywords: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Meta {}
