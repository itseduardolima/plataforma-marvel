export interface Movies {
  id: number;
  title: string;
  image: string;
  description: string;
  criticRating: number;
  releaseDate: string;
  chronologicalOrder: number;
}

declare const moviesData: Movies[];
export default moviesData;