import React, { useEffect, useState } from 'react'

import { useSnack } from '@/hooks/useSnack'
import { validate } from '@/utils/lineup'
import { api } from '@/services/api'

import LineUpPlayers from '../components/LineUpPlayers'
import LineupRules from '../components/LineupRules'
import PlayerMarket from '../components/PlayerMarket'
import AccordionPlayers from '../components/AccordionPlayers'
import AccordionPlayersScouts from '../components/AccordionPlayersScouts'

import {
  Container,
  Content,
  Lineup,
  JoinTournamentButton,
  JoinTournamentContainer
} from './styles'

export default function ContestTeam({ contest, lineup }) {
  const [loading, setLoading] = useState(false)
  const [open, _] = useState(
    new Date().toISOString() < contest.tournament.closedAt
  )
  const [userLineUp, setUserLineUp] = useState(null)
  const [lineupPlayers, setLineupPlayers] = useState([])
  const [scouts, setScouts] = useState([])
  const { showSuccessMessage, showErrorMessage } = useSnack()

  useEffect(() => {
    if (lineup) {
      setUserLineUp(lineup)
      setLineupPlayers(lineup.players)
    }
  }, [lineup])

  useEffect(() => {
    if (userLineUp && userLineUp.length == 0) {
      setLineupPlayers(lineupPlayers.players)
    }
  }, [lineupPlayers, userLineUp])

  useEffect(() => {
    async function fetch() {
      const { data } = await api.get(`/tournaments/${lineup.tournamentId}/scouts`)
      setScouts(data)
    }

    if (lineup) fetch()
  }, [lineup])

  const handleUpdateLineup = ({ player }) => {
    const hasRemove = lineupPlayers.some(item => item.id === player.id)

    if (hasRemove) {
      let newLineupPlayers = []
      newLineupPlayers = lineupPlayers.filter(item => item.id !== player.id)
      setLineupPlayers(newLineupPlayers)
    } else {
      if (lineupPlayers.length >= 5) return
      setLineupPlayers([...lineupPlayers, player])
    }
  }

  const handleSaveLineup = async () => {
    try {
      setLoading(true)

      const validLineup = validate({
        ...lineup,
        players: lineupPlayers
      })

      if (!validLineup) {
        return showErrorMessage('Lineup Invalid')
      }

      const playersIds = lineupPlayers.map(item => ({
        id: item.id
      }))

      await api.put(`/lineups/${userLineUp.id}/players`, playersIds)

      showSuccessMessage('Lineup saved')
    } catch (error) {
      showErrorMessage('Error on save lineup')
    } finally {
      setLoading(false)
    }
  }

  const handleClearLineup = async () => {
    setLineupPlayers([])
  }

  const handleCreateLineup = async () => {
    try {
      const { data } = await api.post(`/lineups`, {
        contest: contest.id
      })

      setUserLineUp(data)
    } finally {
    }
  }

  return (
    <Container>
      <Content>
        {userLineUp ? (
          <>
            <Lineup>
              <LineupRules
                open={open}
                contest={contest}
                lineup={userLineUp}
                players={lineupPlayers}
              />
              {open ? (
                <LineUpPlayers
                  loading={loading}
                  open={open}
                  players={lineupPlayers}
                  scouts={scouts}
                  update={handleUpdateLineup}
                  save={handleSaveLineup}
                  clear={handleClearLineup}
                />
              ) : (
                <AccordionPlayers players={lineupPlayers} scouts={scouts} />
              )}
            </Lineup>
            {open ? (
              <PlayerMarket
                lineup={userLineUp}
                players={lineupPlayers}
                update={handleUpdateLineup}
              />
            ) : (
              <AccordionPlayersScouts scouts={scouts} contest={contest} />
            )}
          </>
        ) : (
          <JoinTournamentContainer>
            <h2>You don&apos;t have a team for this contest yet :(</h2>
            <JoinTournamentButton onClick={handleCreateLineup}>
              Join Contest
            </JoinTournamentButton>
          </JoinTournamentContainer>
        )}
      </Content>
    </Container>
  )
}
