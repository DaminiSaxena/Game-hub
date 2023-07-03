import { useState } from 'react'
import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import { Navbar } from './components/NavBar/Navbar'
import { GameGrid } from './components/Main/GameGrid'

function App() {
  return (
    <Grid
  templateAreas={{base: `"nav" "main"`,
lg: `"nav nav" "aside main"`}}
  // gridTemplateRows={'50px 1fr'}
  // gridTemplateColumns={'150px 1fr'}
  // h='200px'
  gap='1'
 // color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem area={'nav'}>
    <Navbar />
  </GridItem>
  <Show above="lg">
  <GridItem area={'aside'}>
    Aside
  </GridItem>
  </Show>
  <GridItem area={'main'}>
    <GameGrid />
  </GridItem>
 
</Grid>
  )
}

export default App
