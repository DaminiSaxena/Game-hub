import { SimpleGrid } from "@chakra-ui/react";
import { UseGame } from "../../hooks/UseGame";
import { GameCard, Platform } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../../hooks/UseData";

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

export const GameGrid = ({selectedGenre, selectedPlatform}:Props) => {
    const {data, error, isLoading} = UseGame(selectedGenre, selectedPlatform);
if(error) return <div>{error}</div>
const emptyCard = [1, 2, 3, 4, 5, 6, 7, 8];

return (
    
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:3}} padding={10} spacing={10}>
        
    {(isLoading) && emptyCard.map((card)=>{return (<GameCardContainer key= {card}><GameCardSkeleton/></GameCardContainer>)})}
    {data.map((game)=>{ return (<GameCardContainer key={game.id}><GameCard game={game}/></GameCardContainer>);
    })}
    </SimpleGrid>
    
)
}