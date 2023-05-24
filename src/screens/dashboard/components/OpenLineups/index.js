import React from 'react'

import { useAPI } from '@/hooks/useAPI'

import LineupsOpenList from '@/components/LineupsOpenList'
import CardTournamentShimmer from '@/components/Shimmer/CardTournamentShimmer'
import BlankState from '@/components/BlankState'

import { Container, Title, Shimmer } from './styles'

export default function OpenLineups() {
  const { data } = useAPI({
    url: '/lineups/contest/open'
  })

  return (
    <Container>
      <Title>Open lineups</Title>
      {data ? (
        <>
          {data.length === 0 && (
            <BlankState
              title="No tournaments"
              description="No tournaments available at the moment"
              action="More tournaments"
              to="/fantasy"
            />
          )}
          <LineupsOpenList data={data} />
        </>
      ) : (
        <Shimmer>
          <CardTournamentShimmer />
          <CardTournamentShimmer />
          <CardTournamentShimmer />
        </Shimmer>
      )}
    </Container>
  )
}
