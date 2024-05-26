export interface ReviewCollection {
  data: Review[];
  meta: Meta;
}

export interface Review {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  ocupation: string;
  review: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  start: number;
  limit: number;
  total: number;
}
