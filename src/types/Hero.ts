export interface Hero {
  img: string;
  width: number;
  height: number;
}

export type PageWithHero = 'home';

export type HeroSection = Record<PageWithHero, Hero>;
