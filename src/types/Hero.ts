export interface Hero {
  img: string;
  width: number;
  height: number;
}

export type PageWithHero = 'home' | 'about';

export type HeroSection = Record<PageWithHero, Hero>;
