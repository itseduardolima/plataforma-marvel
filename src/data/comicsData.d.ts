export interface Comics {
  id: number;
  title: string;
  image: string;
  description: string;
  criticRating: number;
  available: [string];
}

declare const comicsData: Comics[];
export default comicsData;
