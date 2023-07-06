import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import { UseGenre } from '../../hooks/UseGenre';
import { getImageURL } from '../../services/image-url';

export const GenreList = () => {
    const {data, error, isLoading} = UseGenre();
    if(error) return null;
    else if (isLoading) return <Spinner marginY={10} />
    else return (
    <List paddingY={10}>
        {data.map((genre)=>{return (<ListItem key={genre.id} paddingY="5px"><HStack><Image src={getImageURL(genre.image_background)} boxSize={"32px"} borderRadius={8}/><Text fontSize='lg'>{genre.name}</Text></ HStack></ListItem>)}
        )}
    </List>
  )
}
