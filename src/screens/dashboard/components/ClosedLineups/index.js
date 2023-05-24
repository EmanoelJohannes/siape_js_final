import React, { useState } from 'react'

import { useAPI } from '@/hooks/useAPI'

import LineupsProgresList from '@/components/LineupsProgresList'
import LineupsClosedList from '@/components/LineupsClosedList'

import {
  Container,
  Title,
  Tabs,
  Tab
} from './styles'

export default function ClosedLineups() {
  const [tab, setTab] = useState('progress')

  const { data: openData } = useAPI({
    url: '/lineups/contest/open'
  })

  const { data: closedData } = useAPI({
    url: '/lineups/contest/closed'
  })

  return (
    <Container>
      <Title>Latest lineups</Title>
      <Tabs>
        <Tab active={tab === 'progress'} onClick={() => setTab('progress')}>
          Progress
        </Tab>
        <Tab active={tab === 'closed'} onClick={() => setTab('closed')}>
          Closed
        </Tab>
      </Tabs>
      {tab === 'progress' && <LineupsProgresList data={openData} />}
      {tab === 'closed' && <LineupsClosedList data={closedData} />}
    </Container>
  )
}
