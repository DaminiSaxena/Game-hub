import { Box, Button, SimpleGrid, Spinner } from "@chakra-ui/react";
import { UseGame } from "../../hooks/UseGame";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <Box padding={10}>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={5}>
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
      </InfiniteScroll>
      {/* {!isLoading && (
        <Button
          marginY={5}
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </Button>
      )} */}
    </Box>
  );
};
