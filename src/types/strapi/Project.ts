import type { CTA, Feats } from './Service';
import type { Hero } from './Hero';
import type { Pagination } from '@/types/Pagination.ts';

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
  hero: Hero;
  feats: Feats[];
  details: string;
  description: string;
  slug: string;
  Key: string;
  project_types: ProjectTypes;
  images: ImagesData;
  galleryImages: ImagesData;
  challenge: string;
  solution: string;
  cta: CTA;
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
