import React from 'react';

import Skeleton from '../../Skeleton';

import { Container } from './styles';

const MatchShimmer = () => {
  return (
    <Container>
      <Skeleton className="card-skeleton" />
    </Container>
  );
};

export default MatchShimmer;