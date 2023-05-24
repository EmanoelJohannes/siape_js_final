import React from 'react'

import CardLineup from '../CardLineup'

import { Container } from './styles'
import CardTournamentShimmer from '@/components/Shimmer/CardTournamentShimmer'

export default function LineupsOpenList({ data }) {
  return (
      <Container>
        {data.length === 0 && (
          <>
            <CardTournamentShimmer />
            <CardTournamentShimmer />
            <CardTournamentShimmer />
            <CardTournamentShimmer />
            <CardTournamentShimmer />
            <CardTournamentShimmer />
          </>
        )}
        {data.map(item => (
          <CardLineup key={item.id} lineup={item} />
        ))}
      </Container>
  )
}
