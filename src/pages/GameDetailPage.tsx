import { useParams } from "react-router-dom";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import UseGame from "../hooks/UseGame";
const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = UseGame(slug!);
  console.log(game);
  if (isLoading) <Spinner />;
  if (error) throw error;

  return (
    <>
      <div>Game Detail Page</div>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw} </Text>
    </>
  );
};

export default GameDetailPage;
