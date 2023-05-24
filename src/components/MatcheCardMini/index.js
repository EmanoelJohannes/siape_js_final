import React from 'react'
import { format } from 'date-fns'

import {
  Match,
  MatchDate,
  MatchTeamsContainer,
  TeamMatche,
  TeamMatchLogo
} from './styles'

export default function MatcheCardMini({ matche }) {
  return (
    <Match key={matche.id}>
      <MatchDate>
        <span>{format(new Date(matche.scheduledAt), 'PP')}</span>
        <p>Best Of {matche.numberOfGames}</p>
      </MatchDate>

      <MatchTeamsContainer>
        <TeamMatche>
          <span>{matche.teamA ? matche.teamA.name : 'TBD'}</span>
          <TeamMatchLogo src="/tdb_team.png" />
        </TeamMatche>

        <TeamMatche>
          <TeamMatchLogo src="/tdb_team.png" />
          <span>{matche.teamB ? matche.teamB.name : 'TBD'}</span>
        </TeamMatche>
      </MatchTeamsContainer>
    </Match>
  )
}
