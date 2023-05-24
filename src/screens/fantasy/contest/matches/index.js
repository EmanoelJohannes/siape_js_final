import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'

import { api } from '../../../../services/api'

import AchievementsSideBar from '../components/AchievementsSideBar'
import TeamWidget from '../components/TeamWidget'

import {
  DisplayRow,
  Title,
  DisplayColumn,
  TeamLogo,
  Team,
  Container,
  Match,
  MatchDate,
  Scoreboard,
  MatchTeamsContainer,
  TeamsContainer,
  TeamMatche,
  TeamMatchLogo,
  MatchInformation,
  SideBarContainer
} from './styles'
import TeamMatchShimme from '@/components/Shimmer/TeamMatchShimme'
import MatchShimmer from '@/components/Shimmer/MatchShimmer'

export default function ContestMatches({ contest }) {
  const [teams, setTeams] = useState([])
  const [matches, setMatches] = useState([])

  useEffect(() => {
    async function fetch() {
      const { data: dataTeams } = await api.get(
        `/tournaments/${contest.tournamentId}/teams`
      )
      const { data: dataMatches } = await api.get(
        `/tournaments/${contest.tournamentId}/matches`
      )

      setTeams(dataTeams)
      setMatches(dataMatches)
    }

    fetch()
  }, [contest])

  return (
    <Container>
      <div>
        <Title>Teams</Title>

        <TeamsContainer>
          {teams.length > 0 ? (
            <>
              {teams.map(item => (
                <Team key={item.id}>
                  <TeamLogo src="/tdb_team.png" />
                  <span>{item.name}</span>
                </Team>
              ))}
            </>
          ) : (
            <>
              <TeamMatchShimme />
              <TeamMatchShimme />
              <TeamMatchShimme />
              <TeamMatchShimme />
              <TeamMatchShimme />
              <TeamMatchShimme />
              <TeamMatchShimme />
            </>
          )}
        </TeamsContainer>

        <Title>Matches</Title>

        <DisplayColumn>
          {matches.length > 0 ? (
            <>
              {matches.map(item => (
                <Match key={item.id}>
                  <MatchDate>
                    <span>{format(new Date(item.scheduledAt), 'PP')}</span>
                    <p>Best Of {item.numberOfGames}</p>
                  </MatchDate>

                  <MatchTeamsContainer>
                    <TeamMatche>
                      <span>{item.teamA ? item.teamA.name : 'TBD'}</span>
                      <TeamMatchLogo src="/tdb_team.png" />
                    </TeamMatche>

                    <DisplayRow>
                      <Scoreboard>
                        {item.teamAscore ? item.teamAscore : '0'}
                      </Scoreboard>
                      <span>-</span>
                      <Scoreboard>
                        {item.teamBscore ? item.teamBscore : '0'}
                      </Scoreboard>
                    </DisplayRow>

                    <TeamMatche>
                      <TeamMatchLogo src="/tdb_team.png" />
                      <span>{item.teamB ? item.teamB.name : 'TBD'}</span>
                    </TeamMatche>
                  </MatchTeamsContainer>

                  <MatchInformation>
                    <span>{item.league.acronym}</span>
                    <p>{item.game.name}</p>
                  </MatchInformation>
                </Match>
              ))}
            </>
          ) : (
            <>
              <MatchShimmer />
              <MatchShimmer />
              <MatchShimmer />
              <MatchShimmer />
              <MatchShimmer />
            </>
          )}
        </DisplayColumn>
      </div>

      <SideBarContainer>
        <TeamWidget contest={contest} />
        <AchievementsSideBar contest={contest} />
      </SideBarContainer>
    </Container>
  )
}
