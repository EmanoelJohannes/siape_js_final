import React from 'react'
import {
  Container,
  TournamentContainer,
  BackgroundImage,
  Content
} from './styles'

export default function ContestHeaderCard({ contest }) {

  const maps = {
    lol: '/games/lol_map.png',
    csgo: '/games/csgo_map.png',
    valorant: '/games/valorant_map.png'
  }

  return (
    <Container>
      <BackgroundImage map={maps[contest.game.slug]} />
      <TournamentContainer>
        <Content>
          <h2>Game</h2>
          <span>{contest.game.name}</span>
        </Content>
      </TournamentContainer>
    </Container>
  )
}
