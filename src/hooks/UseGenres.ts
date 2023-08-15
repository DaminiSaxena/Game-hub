import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  name: string;
  id: number;
  image_background: string;
}
const apiClient = new APIClient<Genre>("/genres");
// export const UseGenre = () => UseData<Genre>("/genres");
export const UseGenre = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24,
  });
};
