export interface ReviewCollection {
  reviews: Review[];
}

export interface Reviewer {
  profilePhotoUrl: string;
  displayName: string;
}

export interface Review {
  reviewId: string;
  reviewer?: Reviewer;
  starRating: string;
  comment: string;
  createTime: Date;
  updateTime: Date;
  name: string;
  spanishComment: string;
  englishComment: string;
  rating: number;
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
