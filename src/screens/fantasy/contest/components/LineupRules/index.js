import React from 'react'

import { showValidate, remainingBudget } from '@/utils/lineup'
import { formatPrice } from '@/utils/money'

import { Container, Content, Salary, Rules } from './styles'

export default function LineupRules({ open, contest, lineup, players }) {

  const validLineup = showValidate({
    ...lineup,
    players
  })

  const actualBudget = remainingBudget({
    ...lineup,
    players
  })

  if (!open) return null

  return (
    <Container>
      <h2>Lineup Rules</h2>
      <Content>
        <Salary>
          <p>Remaining salary</p>
          <strong>${formatPrice(actualBudget ? actualBudget : 100000)}</strong>
        </Salary>
        <span>Verify rules</span>
        <Rules>
          <ul>
            <li>
              {validLineup?.length ? '✅' : '❌'} Select <span>5</span> players
            </li>
            <li>
              {validLineup?.budget ? '✅' : '❌'} Maximum salary{' '}
              <span>$1.000.00</span>
            </li>
            <li>
              {validLineup?.teams ? '✅' : '❌'} Maximum <span>3</span> players
              from each team
            </li>
            {contest.game.singlePosition && (
              <li>
                {validLineup?.roles ? '✅' : '❌'} Maximum of <span>1</span>{' '}
                player of each position
              </li>
            )}
          </ul>
        </Rules>
      </Content>
    </Container>
  )
}
