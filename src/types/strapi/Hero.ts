import type { HeroImage } from '@/types/strapi/HeroImage.ts';

export interface CustomHero {
  id?: number;
  title: string;
  subtitle?: string;
  image?: HeroImage;
  backgroundImage?: HeroImage;
}
export interface Hero {
  id: number;
  title: string;
  subtitle?: string;
  image: HeroImage;
  backgroundImage: HeroImage;
}
