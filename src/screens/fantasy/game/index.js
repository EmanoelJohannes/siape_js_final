import React from 'react'

import HowPlayFantasy from '../../../components/HowPlayFantasy'
import CardContestsList from '../../../components/CardContestsList'

import { Container } from './styles'

export default function FantasyGame({ game }) {
  return (
    <Container>
      <HowPlayFantasy />
      <CardContestsList game={game} />
    </Container>
  )
}
