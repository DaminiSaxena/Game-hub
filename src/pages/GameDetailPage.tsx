import { useParams } from "react-router-dom";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import UseGame from "../hooks/UseGame";
import ExpandableText from "../components/Main/ExpandableText";
import DefinitionItem from "../components/Main/DefinitionItem";
import { Metacritic } from "../components/Main/Metacritic";
import GameAttributes from "../components/Main/GameAttributes";
import GameTrailer from "../components/Main/GameTrailer";
const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = UseGame(slug!);
  console.log(game);
  if (isLoading) <Spinner />;
  if (!game) return <>No Game</>;
  if (error) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
