import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
// export const UseGenre = () => UseData<Genre>("/genres");
export const usePlatform = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24,
  });
};
