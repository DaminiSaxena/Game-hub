import ApiClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  name: string;
  id: number;
  slug: string;
}

// export const UseGenre = () => UseData<Genre>("/genres");
export const usePlatform = () => {
  const endpoint = "/platforms/lists/parents";
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      ApiClient.get<FetchResponse<Platform>>(endpoint).then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24,
  });
};
