import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { UseGame } from "../../hooks/UseGame";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../../App";
import React from "react";

interface Props {
  selectedGameQuery: GameQuery;
}

export const GameGrid = ({ selectedGameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = UseGame(selectedGameQuery);
  if (error) return <div>{error.message}</div>;
  const emptyCard = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Box spacing={"30px"}>
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
        {data?.pages.map((page, index) => {
          return (
            <React.Fragment key={index}>
              {page?.results.map((game) => {
                return (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                );
              })}
            </React.Fragment>
          );
        })}
      </SimpleGrid>
      {!isLoading && (
        <Button
          marginY={5}
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </Button>
      )}
    </Box>
  );
};
