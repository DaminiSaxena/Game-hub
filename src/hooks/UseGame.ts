import ApiClient, { FetchResponse } from "../services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
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
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", selectedGameQuery],
    queryFn: (pageParams) =>
      ApiClient.get<FetchResponse<Game>>(endpoint, {
        params: {
          genres: selectedGameQuery.genreId,
          parent_platforms: selectedGameQuery.platformId,
          ordering: selectedGameQuery.sortOrder,
          search: selectedGameQuery.searchText,
          page: pageParams,
        },
      }).then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });
};
