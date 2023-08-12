import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { UseGenre } from "../../hooks/UseGenres";
import { getImageURL } from "../../services/image-url";
import useGameQueryStore from "../../store";

export const GenreList = () => {
  const { data, error, isLoading } = UseGenre();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
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
                    fontWeight={selectedGenreId == genre.id ? "bold" : "normal"}
                    fontSize="lg"
                    variant={"link"}
                    onClick={() => setGenreId(genre.id)}
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
