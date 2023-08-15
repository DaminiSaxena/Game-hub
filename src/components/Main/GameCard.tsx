import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import styles from "./Main.module.scss";
import { PlatformIconList } from "./PlatformIconList";
import { Metacritic } from "./Metacritic";
import { getImageURL } from "../../services/image-url";
import { Game } from "../../hooks/UseGames";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
export interface Platform {
  name: string;
  id: number;
  slug: string;
}

interface props {
  game: Game;
}
export const GameCard = ({ game }: props) => {
  return (
    <Card>
      <Image src={getImageURL(game.background_image)} />
      <CardBody>
        <HStack
          className={styles.platformIcon}
          color="gray.500"
          marginBottom={3}
        >
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <Metacritic critic={game.metacritic} />
        </HStack>
        <Heading className={styles.heading} fontSize={"20px"}>
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};
