import APIClient, { FetchResponse } from "../services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "../store";

export interface Game {
  name: string;
  id: number;
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
  slug: string;
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
const apiClient = new APIClient<Game>("/games");
export const UseGames = () => {
  const selectedGameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", selectedGameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: selectedGameQuery.genreId,
          parent_platforms: selectedGameQuery.platformId,
          ordering: selectedGameQuery.sortOrder,
          search: selectedGameQuery.searchText,
          // page: pageParams,
        },
      }),
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });
};
