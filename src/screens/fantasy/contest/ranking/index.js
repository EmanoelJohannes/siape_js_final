import React from 'react'

import AchievementsSideBar from '../components/AchievementsSideBar'
import RankingList from '../components/RankingList'
import RankingSelf from '../components/RankingSelf'
import TeamWidget from '../components/TeamWidget'

import { Container, Title, SideBarContainer } from './styles'

export default function ContestRanking({ contest }) {
  return (
    <Container>
      <div>
        <Title>You position</Title>
        <RankingSelf contest={contest} />
        <Title>Leaderboard</Title>
        <RankingList contest={contest} />
      </div>
      <SideBarContainer>
        <TeamWidget contest={contest} />
        <AchievementsSideBar contest={contest} />
      </SideBarContainer>
    </Container>
  )
}
