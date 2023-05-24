import React from 'react'
import AchievementsSideBar from '../components/AchievementsSideBar'
import TeamWidget from '../components/TeamWidget'

import { Container, SideBarContainer } from './styles'

export default function ContestStatistics({ contest }) {
  return (
    <Container>
      <div>
        <h2>Statistics</h2>
      </div>

      <SideBarContainer>
        <TeamWidget contest={contest} />
        <AchievementsSideBar contest={contest} />
      </SideBarContainer>
    </Container>
  )
}
