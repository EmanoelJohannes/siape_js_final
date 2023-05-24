import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { formatRelative } from 'date-fns'
import { Container as BootstrapContainer } from 'styled-bootstrap-grid'

import { api } from '../../../../services/api'

import {
  Content,
  BackgroundImage,
  Container,
  JoinTournamentButton,
  AvatarRow,
  Avatar
} from './styles'

export default function CardHeader({ contest }) {
  const router = useRouter()
  const [lineup, setLineup] = useState(null)


  const games = {
    lol: '/games/lol_capa.png',
    csgo: '/games/csgo_capa.png',
    valorant: '/games/valorant_capa.png'
  }

  useEffect(() => {
    async function fetch() {
      const { data } = await api.get(`/lineups/contest/${contest.id}/self`)
      setLineup(data)
    }

    fetch()
  }, [contest])

  const handleCreateLineup = async () => {
    try {
      const { data } = await api.post(`/lineups`, {
        contest: contest.id
      })
      setLineup(data)

      router.push(`/fantasy/contests/${contest.id}/team`)
    } finally {
    }
  }

  const handleShowLineup = async () => {
    router.push(`/fantasy/contests/${contest.id}/team`)
  }

  return (
    <>
      <BackgroundImage game={games[contest.game.slug]} />
      <Content>
        <BootstrapContainer>
          <Container>
            <div>
              <h2>
                {contest.league.name}: {contest.tournament.name}
              </h2>
              <span>
                Closes{' '}
                {formatRelative(
                  new Date(contest.tournament.closedAt),
                  new Date()
                )}
              </span>

              <AvatarRow>
                <Avatar imageUrl="url('/tdb_team.png')" />
                <Avatar imageUrl="url('/tdb_team.png')" />
                <Avatar imageUrl="url('/tdb_team.png')" />
                <Avatar imageUrl="url('/tdb_team.png')" />
                <Avatar imageUrl="url('/tdb_team.png')" />
              </AvatarRow>
            </div>
          </Container>
          {lineup ? (
            <JoinTournamentButton onClick={handleShowLineup}>
              Edit Lineup
            </JoinTournamentButton>
          ) : (
            <JoinTournamentButton onClick={handleCreateLineup}>
              Join Contest
            </JoinTournamentButton>
          )}
        </BootstrapContainer>
      </Content>
    </>
  )
}
