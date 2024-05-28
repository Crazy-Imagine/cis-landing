export type PageWithHero =
  | 'home'
  | 'about'
  | 'blog'
  | 'references'
  | 'services'
  | 'mission'
  | 'contact-us'
  | 'meet-the-team';

export type HeroImages = Record<PageWithHero, string>;
