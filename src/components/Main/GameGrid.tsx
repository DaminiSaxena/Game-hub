import { SimpleGrid } from "@chakra-ui/react";
import { UseGame } from "../../hooks/UseGame";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../../App";

interface Props {
  selectedGameQuery: GameQuery;
}

export const GameGrid = ({ selectedGameQuery }: Props) => {
  const { data, error, isLoading } = UseGame(selectedGameQuery);
  if (error) return <div>{error.message}</div>;
  const emptyCard = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
      padding={10}
      spacing={5}
    >
      {isLoading &&
        emptyCard.map((card) => {
          return (
            <GameCardContainer key={card}>
              <GameCardSkeleton />
            </GameCardContainer>
          );
        })}
      {data?.results.map((game) => {
        return (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        );
      })}
    </SimpleGrid>
  );
};
