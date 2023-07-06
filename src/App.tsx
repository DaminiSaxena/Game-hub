import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import { Navbar } from './components/NavBar/Navbar'
import { GameGrid } from './components/Main/GameGrid'
import { GenreList } from './components/Aside/GenreList'

function App() {
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
    <GenreList />
  </GridItem>
  </Show>
  <GridItem area={'main'}>
    <GameGrid />
  </GridItem>
 
</Grid>
  )
}

export default App
