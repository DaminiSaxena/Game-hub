import ApiClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatform";
import { GameQuery } from "../App";

export interface Game {
  name: string;
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

// export const UseGame = (selectedGameQuery: GameQuery) =>
//   UseData<Game>(
//     "/games",
//     {
//       params: {
//         genres: selectedGameQuery.genre?.id,
//         platforms: selectedGameQuery.platform?.id,
//         ordering: selectedGameQuery.sortOrder,
//         search: selectedGameQuery.searchText,
//       },
//     },
//     [selectedGameQuery]
//   );

export const UseGame = (selectedGameQuery: GameQuery) => {
  const endpoint = "/games";
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: [selectedGameQuery],
    queryFn: () =>
      ApiClient.get<FetchResponse<Game>>(endpoint, {
        params: {
          genres: selectedGameQuery.genre?.id,
          parent_platforms: selectedGameQuery.platform?.id,
          ordering: selectedGameQuery.sortOrder,
          search: selectedGameQuery.searchText,
        },
      }).then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24,
  });
};
