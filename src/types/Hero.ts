export interface Hero {
  img: string;
  width: number;
  height: number;
}

export type PageWithHero = 'home' | 'about' | 'blog' | 'references' | 'services' | 'mission';

export type HeroSection = Record<PageWithHero, Hero>;
