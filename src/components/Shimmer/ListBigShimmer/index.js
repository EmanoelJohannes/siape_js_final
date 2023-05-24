import React from 'react'

import Skeleton from '../../Skeleton'

import { Container, Background } from './styles'

const ListBigShimmer = () => {
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

export default ListBigShimmer
