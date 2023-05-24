import React from 'react'

import {
  Container,
  GameAchievementsContainer,
  AchievementContainer,
  Achievement,
  TrophyFillIcon
} from './styles'

export default function AchievementsSideBar({ contest }) {
  if (!contest.prizepool) return null

  const groupByKey = (list, key) =>
    list.reduce(
      (hash, obj) => ({
        ...hash,
        [obj[key]]: (hash[obj[key]] || []).concat(obj)
      }),
      {}
    )
  const prizepoolGroup = Object.entries(
    groupByKey(contest.prizepool, 'prize')
  ).reverse()

  return (
    <Container>
      <h2>Prizepool</h2>
      <GameAchievementsContainer>
        <AchievementContainer>
          {prizepoolGroup.map((item) => {
            const prizesRangerStart = item[1]
            const prizesRangerEnd = prizesRangerStart[prizesRangerStart.length - 1]

            return (
              <Achievement key={item[0]}>
                <TrophyFillIcon />
                <div>
                  <p>
                    {prizesRangerStart[0].position}st place -{' '}
                    {prizesRangerEnd.position}st place
                  </p>
                  <span>{item[0]} SATS</span>
                </div>
              </Achievement>
            )
          })}
        </AchievementContainer>
      </GameAchievementsContainer>
    </Container>
  )
}
