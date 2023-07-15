import ApiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./UseData";

export interface Genre {
  name: string;
  id: number;
  image_background: string;
}

// export const UseGenre = () => UseData<Genre>("/genres");
export const UseGenre = () => {
  const endpoint = "/genres";
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      ApiClient.get<FetchResponse<Genre>>(endpoint).then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24,
  });
};
