export interface Characters {
  id: number;
  image: string;
  title: string;
  description:  string;
  appearances: Array<string>;
  fanRating: number;
}

declare const charactersData: Characters[];
export default charactersData;