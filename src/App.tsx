import "./App.css";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { Navbar } from "./components/NavBar/Navbar";
import { GameGrid } from "./components/Main/GameGrid";
import { GenreList } from "./components/Aside/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/UseData";
import PlatformSelector from "./components/Main/PlatformSelector";
import { Platform } from "./hooks/UseGame";
import SortSelector from "./components/Main/SortSelector";
import GameHeading from "./components/Main/GameHeading";

export interface GameQuery {
  genre: Genre;
  platform: Platform;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      gridTemplateColumns={{ base: "1fr", lg: "200px 1fr" }}
      gap="1"
      fontWeight="bold"
    >
      <GridItem area={"nav"}>
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} marginY={5} paddingX={3}>
          <GenreList
            onSelection={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGameQuery={gameQuery}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={10}>
          <GameHeading gameQuery={gameQuery} />
          <HStack marginBottom={5} spacing={5}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrder={gameQuery.sortOrder}
            />
          </HStack>
        </Box>
        <GameGrid selectedGameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
