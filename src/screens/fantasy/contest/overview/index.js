import React, { useState, useEffect } from 'react'

import { api } from '@/services/api'

import AchievementsSideBar from '../components/AchievementsSideBar'
import TeamWidget from '../components/TeamWidget'
import ContestHeaderCard from '../components/ContestHeaderCard'

import {
  TournamentFormat,
  TournamentInfosContainer,
  TournamentInfo,
  Container,
  TournamentScouts,
  Scout,
  SideBarContainer
} from './styles'

export default function ContestOverview({ contest }) {
  const [scouts, setScouts] = useState([])

  useEffect(() => {
    async function fetch() {
      const { data } = await api.get(`/scouts?gameId=${contest.game.id}`)
      setScouts(data)
    }

    fetch()
  }, [contest])

  return (
    <Container>
      <div>
        <TournamentFormat>
          <h2>Contest Information</h2>

          <TournamentInfosContainer>
            <TournamentInfo
              style={{
                borderRight: '0.5px solid #36313D',
                borderBottom: '0.5px solid #36313D'
              }}
            >
              <p>Game</p>
              <span>{contest.game.name}</span>
            </TournamentInfo>

            <TournamentInfo
              style={{
                paddingLeft: '20px',
                borderRight: '0.5px solid #36313D',
                borderBottom: '0.5px solid #36313D'
              }}
            >
              <p>League</p>
              <span>{contest.league.name}</span>
            </TournamentInfo>

            <TournamentInfo
              style={{
                paddingLeft: '20px',
                borderBottom: '0.5px solid #36313D'
              }}
            >
              <p>Round</p>
              <span>{contest.tournament.name}</span>
            </TournamentInfo>

            <TournamentInfo style={{ borderRight: '0.5px solid #36313D' }}>
              <p>Check in period</p>
              <span>Start of matches</span>
            </TournamentInfo>

            <TournamentInfo
              style={{
                paddingLeft: '20px',
                borderRight: '0.5px solid #36313D'
              }}
            >
              <p>Prizepool</p>
              <span>15.000 SATS</span>
            </TournamentInfo>

            <TournamentInfo style={{ paddingLeft: '20px' }}>
              <p>Cost</p>
              <span>Free</span>
            </TournamentInfo>
          </TournamentInfosContainer>
        </TournamentFormat>

        <TournamentFormat>
          <h2>Game Scouts</h2>

          <ContestHeaderCard contest={contest} />

          <TournamentInfosContainer>
            <TournamentInfo>
              <p>Game mode</p>
              <span>Classic</span>
            </TournamentInfo>

            <TournamentInfo>
              <p>Salary cap</p>
              <span>$1.000.000</span>
            </TournamentInfo>

            <TournamentInfo>
              <p>Duration</p>
              <span>Quick</span>
            </TournamentInfo>
          </TournamentInfosContainer>
        </TournamentFormat>

        <TournamentFormat>
          <h2>Rules & Scoring</h2>
          <TournamentInfo>
            <p>
              The player&apos;s performance in each championship match is
              converted into points and counted for his/her Teams, according to
              the following rules:
            </p>
          </TournamentInfo>
          <TournamentScouts>
            {scouts.map(item => (
              <Scout key={item.id}>
                <span>{item.name}</span>
                <p>{item.value} Pts</p>
              </Scout>
            ))}
          </TournamentScouts>
        </TournamentFormat>
      </div>

      <SideBarContainer>
        <TeamWidget contest={contest} />
        <AchievementsSideBar contest={contest} />
      </SideBarContainer>
    </Container>
  )
}
