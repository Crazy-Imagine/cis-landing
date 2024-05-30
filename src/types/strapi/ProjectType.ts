export interface ProjectTypeCollection {
  data: ProjectType[];
  meta: Meta;
}

export interface ProjectType {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
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
