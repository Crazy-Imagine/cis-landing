export interface FAQ {
  data: Data;
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
  seo: SEO;
}

export interface SEO {
  id: number;
  keywords: string;
  metaTitle: string;
  metaDescription: string;
}
