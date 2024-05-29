export interface Section {
  img: Image;
  title: string;
  description: string;
  cards: ICard[];
}

interface Image {
  path: string;
  alt: string;
  class?: string;
  bgColor?: string;
}

interface ICard {
  icon: any;
  iconClass?: string;
  text: string;
  description: any;
}
