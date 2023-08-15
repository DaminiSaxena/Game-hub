import { useQuery } from "@tanstack/react-query";
import React from "react";
import APIClient from "../services/api-client";
import { Game } from "./UseGames";

const apiClient = new APIClient<Game>("/games");

const UseGame = (slug: string) => {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });
};

export default UseGame;
