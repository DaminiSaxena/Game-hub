import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'
import styles from "./Main.module.scss";

const GameCardSkeleton = () => {
  return (
    <Card>
        <Skeleton height={200}/>
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton