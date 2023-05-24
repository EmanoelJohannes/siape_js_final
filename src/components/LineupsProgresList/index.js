import React from 'react'
import Link from 'next/link'

import BlankState from '@/components/BlankState'
import ListBigShimmer from '@/components/Shimmer/ListBigShimmer'

import {
  Container,
  Content,
  Lineup,
  Information,
  Tags,
  Players,
  Player,
  Dot
} from './styles'

export default function LineupsProgresList({ data }) {
  if (!data)
    return (
      <Container>
        <ListBigShimmer />
      </Container>
    )

  return (
    <Container>
      <Content>
        {data.length === 0 && (
          <BlankState
            title="No tournaments"
            description="No tournaments available at the moment"
            action="More tournaments"
            to="/fantasy"
          />
        )}
        {data.map(item => (
          <Link
            key={item.id}
            href={`/fantasy/contests/${item.contest.id}/overview`}
            passHref
          >
            <Lineup>
              <Information>
                <p>{item.contest.league.name}</p>
                <Tags>
                  <span>{item.contest.tournament.name}</span>
                  <Dot />
                  <span>{item.contest.game.name}</span>
                </Tags>
              </Information>
              <Players>
                {item.players.map(player => (
                  <Player key={player.id} imageUrl="url('/tbd_player.png')" />
                ))}
              </Players>
            </Lineup>
          </Link>
        ))}
      </Content>
    </Container>
  )
}
