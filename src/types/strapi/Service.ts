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
  hero: Hero;
}

export interface Hero {
  id: number;
  title: string;
  subtitle: null;
  image: Image;
}

export interface Image {
  data: Data;
}

export interface Data {
  id: number;
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  url: string;
  width: number;
  height: number;
  alternativeText: null | string;
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
