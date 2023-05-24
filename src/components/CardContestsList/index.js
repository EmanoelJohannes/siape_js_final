import React from 'react'

import { useAPI } from '@/hooks/useAPI'

import CardContest from '../CardContest'
import BlankState from '../BlankState'

import { Container, Title } from './styles'
import CardTournamentShimmer from '@/components/Shimmer/CardTournamentShimmer'

export default function CardContestsList({ game }) {
  const { data } = useAPI({
    url: game ? `/contests/list?gameId=${game.id}` : '/contests/list'
  })

  return (
    <>
      <Title>Popular Tournaments</Title>
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
          <Container>
            {data?.map(item => (
              <CardContest key={item.id} contest={item} />
            ))}
          </Container>
        </>
      ) : (
        <Container>
          <>
            <CardTournamentShimmer />
            <CardTournamentShimmer />
            <CardTournamentShimmer />
            <CardTournamentShimmer />
            <CardTournamentShimmer />
            <CardTournamentShimmer />
          </>
        </Container>
      )}
    </>
  )
}
