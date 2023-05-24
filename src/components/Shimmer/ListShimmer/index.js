import React from 'react'

import Skeleton from '../../Skeleton'

import { Container, Background } from './styles'

const ListShimmer = () => {
  return (
    <Container>
      <Background>
        <Skeleton className="row-skeleton" />
      </Background>
      <Background>
        <Skeleton className="row-skeleton" />
      </Background>
      <Background>
        <Skeleton className="row-skeleton" />
      </Background>
      <Background>
        <Skeleton className="row-skeleton" />
      </Background>
      <Background>
        <Skeleton className="row-skeleton" />
      </Background>
    </Container>
  )
}

export default ListShimmer
