import { GameQuery } from "../App";
import { Genre, UseData } from "./UseData";
export interface Platform {
  name: string;
  id: number;
  slug: string;
}

export interface Game {
  name: string;
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

export const UseGame = (selectedGameQuery: GameQuery) =>
  UseData<Game>(
    "/games",
    {
      params: {
        genres: selectedGameQuery.genre?.id,
        platforms: selectedGameQuery.platform?.id,
        ordering: selectedGameQuery.sortOrder,
        search: selectedGameQuery.searchText,
      },
    },
    [selectedGameQuery]
  );
