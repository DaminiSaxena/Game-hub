import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  name: string;
  id: number;
  background_image: string;
  genres: Genre[];
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
  slug: string;
  publishers: Publisher[];
}
