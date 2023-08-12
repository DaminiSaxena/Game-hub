import { Heading } from "@chakra-ui/react";
import { Genre, UseGenre } from "../../hooks/UseGenres";
import { usePlatform } from "../../hooks/usePlatforms";
import { Platform } from "./GameCard";
import { FetchResponse } from "../../services/api-client";
import useGameQueryStore from "../../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const getGenreName = (genres?: FetchResponse<Genre>) => {
    return genres?.results.find((genre) => genre.id === genreId)?.name;
  };
  const getPlatformName = (platforms?: FetchResponse<Platform>) => {
    return platforms?.results.find((platform) => platform.id === platformId)
      ?.name;
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
