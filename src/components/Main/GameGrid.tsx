import { SimpleGrid } from "@chakra-ui/react";
import { UseGame } from "../../hooks/UseGame";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

export const GameGrid = () => {
    const {data, error, isLoading} = UseGame();
if(error) return <div>{error}</div>
const emptyCard = [1, 2, 3, 4, 5, 6, 7, 8];

return (
    
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} padding={10} spacing={10}>
        
    {(isLoading) && emptyCard.map((card)=>{return (<GameCardContainer><GameCardSkeleton key= {card}/></GameCardContainer>)})}
    {data.map((game)=>{ return (<GameCardContainer><GameCard game={game}/></GameCardContainer>);
    })}
    </SimpleGrid>
    
)
}