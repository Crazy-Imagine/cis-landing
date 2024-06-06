import type { HeroImage } from '@/types/strapi/HeroImage.ts';

export interface Hero {
  id: number;
  title: string;
  subtitle?: string;
  image: HeroImage;
}
