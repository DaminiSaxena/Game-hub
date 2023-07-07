import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import { Navbar } from './components/NavBar/Navbar'
import { GameGrid } from './components/Main/GameGrid'
import { GenreList } from './components/Aside/GenreList'
import {useState} from 'react';
import { Genre } from './hooks/UseData'
import PlatformSelector from './components/Main/PlatformSelector'
import { Platform } from './hooks/UseGame'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  return (
    <Grid
  templateAreas={{base: `"nav" "main"`,
lg: `"nav nav" "aside main"`}}
  
  gridTemplateColumns={{base:'1fr',
lg:'200px 1fr'}}
  gap='1'
  fontWeight='bold'
>
  <GridItem area={'nav'}>
    <Navbar />
  </GridItem>
  <Show above="lg">
  <GridItem area={'aside'} marginY={5} paddingX={3}>
    <GenreList onSelection={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
  </GridItem>
  </Show>
  <GridItem area={'main'}>
    <PlatformSelector onSelectPlatform={(platform) => setSelectedPlatform(platform)} selectedPlatform={selectedPlatform}/>
    <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
  </GridItem>
 
</Grid>
  )
}

export default App
