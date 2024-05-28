export interface ArticleCollection {
  data: Article[];
  meta: Meta;
}

export interface Article {
  id: number;
  attributes: ArticleAttributes;
}

export interface ArticleAttributes {
  title: string;
  description: string;
  content: string;
  slug: string;
  locale: string;
  Key: string;
  category: Category;
  author: Author;
  image: Image;
}

export interface Author {
  data: AuthorData;
}

export interface AuthorData {
  id: number;
  attributes: AuthorAttributes;
}

export interface AuthorAttributes {
  name: string;
}

export interface Category {
  data: CategoryData;
}

export interface CategoryData {
  id: number;
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  name: string;
}

export interface Image {
  data: ImageData[];
}

export interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  url: string;
  width: number;
  height: number;
  formats: Formats;
}

export interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  start: number;
  limit: number;
  total: number;
}
