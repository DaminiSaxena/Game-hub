import { SimpleGrid } from "@chakra-ui/react";
import { UseGame } from "./UseGame";
import { GameCard } from "./GameCard";

export const GameGrid = () => {
    const {games, error} = UseGame();
if(error) return <div>{error}</div>

return (
    
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding="10px" spacing="10px">
    {games.map((game)=>{ return (<GameCard game={game}/>);
    })}
    </SimpleGrid>
    
)
}