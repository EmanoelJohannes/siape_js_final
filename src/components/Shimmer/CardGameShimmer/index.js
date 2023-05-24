import React from 'react';

import Skeleton from '../../Skeleton';

import { Container } from './styles';

const CardGameShimmer = () => {
  return (
    <Container>
      <Skeleton className="card-skeleton" />
      <Skeleton className="row-skeleton" />
      <Skeleton className="row-skeleton" />
    </Container>
  );
};

export default CardGameShimmer;