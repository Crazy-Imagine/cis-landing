export interface FAQs {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  Questions: string;
  Ask: string;
  faq_options: FAQOptions;
}

export interface FAQOptions {
  data: Data;
}

export interface Data {
  id: number;
  attributes: OptionsAttributes;
}

export interface OptionsAttributes {
  name: string;
  slug: string;
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
