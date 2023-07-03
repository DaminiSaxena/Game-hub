import { Card, Heading, Image } from "@chakra-ui/react";
import styles from "./Main.module.scss";
interface Game {
    name: string;
    id: number;
    background_image: string;
}

interface props {
    game: Game;
}
export const GameCard = ({game}:props) => {

    return(
        <Card className={styles.Card}>
            <Image src = {game.background_image} />
            <Heading className={styles.heading}>{game.name}</Heading>
        </Card>
    );
} 