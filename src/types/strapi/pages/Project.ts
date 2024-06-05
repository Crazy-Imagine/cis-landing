export interface ProjectsPage {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  mainTitle: string;
  ourProjectsTitle: null;
  outProjectsDescription: null;
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

export interface Hero {
  id: number;
  title: string;
  subtitle: string;
}
