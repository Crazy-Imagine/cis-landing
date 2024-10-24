import type { Pagination } from '@/types/Pagination.ts';

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
