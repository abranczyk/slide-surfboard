export interface Carousel {
  id: string;
  title: string;
  description: string;
  topic: string;
  slides: Slide[];
  thumbnail: string;
}

export interface Slide {
  id: string;
  title: string;
  content: string;
  image?: string;
}