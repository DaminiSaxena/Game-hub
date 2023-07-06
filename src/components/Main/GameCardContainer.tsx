import { Box } from '@chakra-ui/react'
import {ReactNode} from 'react';
import styles from "./Main.module.scss";

interface props{
    children: ReactNode
}

const GameCardContainer = ({children}:props) => {
  return (
    <Box className={styles.Card}>
        {children}
    </Box>
  )
}

export default GameCardContainer