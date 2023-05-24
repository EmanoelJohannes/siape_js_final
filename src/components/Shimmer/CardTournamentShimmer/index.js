import React from 'react';

import Skeleton from '../../Skeleton';

import { Container, Background } from './styles';

const CardTournamentShimmer = () => {
  return (
    <Container>
      <Skeleton className="card-skeleton" />
      <Background>
        <Skeleton className="row-skeleton" />
      </Background>
    </Container>
  );
};

export default CardTournamentShimmer;