export type PageWithHero =
  | 'home'
  | 'about'
  | 'blog'
  | 'references'
  | 'services'
  | 'mission'
  | 'meet-the-team';

export type HeroImages = Record<PageWithHero, string>;
