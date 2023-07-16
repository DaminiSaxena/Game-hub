import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";
import { Genre, UseGenre } from "../../hooks/UseGenre";
import { usePlatform } from "../../hooks/usePlatform";
import { Platform } from "./GameCard";
import { FetchResponse } from "../../services/api-client";

interface props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: props) => {
  const getGenreName = (genres?: FetchResponse<Genre>) => {
    return genres?.results.find((genre) => genre.id === gameQuery.genreId)
      ?.name;
  };
  const getPlatformName = (platforms?: FetchResponse<Platform>) => {
    return platforms?.results.find(
      (platform) => platform.id === gameQuery.platformId
    )?.name;
  };
  const { data: genres } = UseGenre();
  const { data: platforms } = usePlatform();
  const genreName = getGenreName(genres);
  const platformName = getPlatformName(platforms);
  const heading = `${platformName || ""} ${genreName || ""} Game`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
