import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import { Navbar } from './components/NavBar/Navbar'
import { GameGrid } from './components/Main/GameGrid'
import { GenreList } from './components/Aside/GenreList'
import {useState} from 'react';
import { Genre } from './hooks/UseData'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
    <GameGrid selectedGenre={selectedGenre}/>
  </GridItem>
 
</Grid>
  )
}

export default App
