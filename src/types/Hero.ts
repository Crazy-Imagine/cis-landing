export type PageWithHero =
  | 'home'
  | 'about'
  | 'blog'
  | 'references'
  | 'services'
  | 'mission'
  | 'contact-us'
  | 'meet-the-team'
  | 'work-with-us';

export type HeroImages = Record<PageWithHero, string>;
