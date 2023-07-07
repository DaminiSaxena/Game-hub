import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import { UseGenre } from '../../hooks/UseGenre';
import { getImageURL } from '../../services/image-url';
import { Genre } from '../../hooks/UseData';
import { GameQuery } from '../../App';

interface props{
    onSelection: (genre:Genre) => void;
    selectedGameQuery: GameQuery;
}

export const GenreList = ({onSelection, selectedGameQuery}:props) => {
    const {data, error, isLoading} = UseGenre();
    if(error) return null;
    else if (isLoading) return <Spinner marginY={10} />
    else return (
    <List paddingY={10}>
        {data.map((genre)=>{return (<ListItem key={genre.id} paddingY="5px"><HStack><Image src={getImageURL(genre.image_background)} boxSize={"32px"} borderRadius={8}/>
        <Button fontWeight={(selectedGameQuery.genre?.id==genre.id)? 'bold':'normal'} fontSize='lg' variant={'link'} onClick={() => onSelection(genre)}>{genre.name}</Button>
        </ HStack>
        </ListItem>)}
        )}
    </List>
  )
}
