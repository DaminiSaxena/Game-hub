import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { GenreList } from "../components/Aside/GenreList";
import GameHeading from "../components/Main/GameHeading";
import SortSelector from "../components/Main/SortSelector";
import PlatformSelector from "../components/Main/PlatformSelector";
import { GameGrid } from "../components/Main/GameGrid";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: ` "aside main"` }}
      gridTemplateColumns={{ base: "1fr", lg: "200px 1fr" }}
      gap="1"
      fontWeight="bold"
    >
      <Show above="lg">
        <GridItem area={"aside"} marginY={5} paddingX={3}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={10}>
          <GameHeading />
          <HStack marginBottom={5} spacing={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Homepage;
