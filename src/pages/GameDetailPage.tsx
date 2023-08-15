import { useParams } from "react-router-dom";
import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import UseGame from "../hooks/UseGame";
import ExpandableText from "../components/Main/ExpandableText";
import DefinitionItem from "../components/Main/DefinitionItem";
import { Metacritic } from "../components/Main/Metacritic";
import GameAttributes from "../components/Main/GameAttributes";
import GameTrailer from "../components/Main/GameTrailer";
import GameScreenshots from "../components/Main/GameScreenshots";
const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = UseGame(slug!);
  console.log(game);
  if (isLoading) <Spinner />;
  if (!game) return <>No Game</>;
  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} padding={4}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
