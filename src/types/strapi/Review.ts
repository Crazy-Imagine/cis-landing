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
  createdAt: string;
  project: Project;
  category_reviews: CategoryReviews;
}

export interface CategoryReviews {
  data: CategoryReviewsDatum[];
}

export interface CategoryReviewsDatum {
  id: number;
  attributes: CategoryReviewAttributes;
}

export interface CategoryReviewAttributes {
  Name: string;
}

export interface Project {
  data: Data;
}

export interface Data {
  id: number;
  attributes: ProjectAttributes;
}

export interface ProjectAttributes {
  title: string;
  details: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  start: number;
  limit: number;
  total: number;
}
