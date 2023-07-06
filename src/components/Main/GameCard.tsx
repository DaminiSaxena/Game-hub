import { Card, CardBody, HStack, Heading, Image, Skeleton } from "@chakra-ui/react";
import styles from "./Main.module.scss";
import { PlatformIconList } from "./PlatformIconList";
import { Metacritic } from "./Metacritic";
import { getImageURL } from "../../services/image-url";
import { Game } from "../../hooks/UseGame";
export interface Platform{
    name: string;
    id: number;
    slug: string;
}


interface props {
    game: Game;
}
export const GameCard = ({game}:props) => {

    return(
        
        <Card >
            <Image src = {getImageURL(game.background_image)} />
            <CardBody>
            <Heading className = {styles.heading} fontSize={20}>{game.name}</Heading>
            <HStack className = {styles.platformIcon}  color = "gray.500"><PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
            <Metacritic critic = {game.metacritic} />
            </HStack>
            </CardBody>
        </Card>
    );
} 