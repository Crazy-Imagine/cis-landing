export interface ProjectCollection {
  data: Project[];
  meta: Meta;
}

export interface Project {
  id: number;
  attributes: ProjectAttributes;
}

export interface ProjectAttributes {
  title: string;
  details: string;
  description: string;
  slug: string;
  Key: string;
  project_types: ProjectTypes;
  images: ImagesData;
  galleryImages: ImagesData;
}

export interface ImagesData {
  data: Image[];
}

export interface Image {
  id: number;
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  url: string;
  formats: Formats;
  width: number;
  height: number;
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

interface ProjectTypes {
  data: ProjectType[];
}

interface ProjectType {
  id: number;
  attributes: ProjectTypeAttributes;
}

interface ProjectTypeAttributes {
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
