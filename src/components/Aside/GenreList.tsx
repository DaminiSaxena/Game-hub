import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { UseGenre } from "../../hooks/UseGenre";
import { getImageURL } from "../../services/image-url";

import { GameQuery } from "../../App";

interface props {
  onSelection: (genreId: number) => void;
  selectedGameQuery: GameQuery;
}

export const GenreList = ({ onSelection, selectedGameQuery }: props) => {
  const { data, error, isLoading } = UseGenre();
  if (error) return null;
  else if (isLoading) return <Spinner marginY={10} />;
  else
    return (
      <>
        <Heading fontSize={"3xl"}>Genre</Heading>
        <List paddingY={10}>
          {data?.results.map((genre) => {
            return (
              <ListItem key={genre.id} paddingY="5px">
                <HStack>
                  <Image
                    src={getImageURL(genre.image_background)}
                    boxSize={"32px"}
                    borderRadius={8}
                    objectFit={"cover"}
                  />
                  <Button
                    whiteSpace={"normal"}
                    textAlign={"left"}
                    fontWeight={
                      selectedGameQuery.genreId == genre.id ? "bold" : "normal"
                    }
                    fontSize="lg"
                    variant={"link"}
                    onClick={() => onSelection(genre.id)}
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            );
          })}
        </List>
      </>
    );
};
