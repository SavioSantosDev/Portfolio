export interface Case {
  id: number;
  title: string;
  genre: string;
  description: string;
  technologies: string[];
  website: string;
  open_source: string;
  banner: string;
  images: Image[];
}


interface Image {
  id: number;
  path: string;
}
