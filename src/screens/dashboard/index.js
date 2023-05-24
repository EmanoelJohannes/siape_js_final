import React from 'react'

import { useAuth } from '@/hooks/useAuth'
import { welcome } from '@/utils/dates'

import OpenLineups from './components/OpenLineups'
import ClosedLineups from './components/ClosedLineups'

import { Container, Welcome } from './styles'

export default function Dashboard() {

  const { user } = useAuth()

  const message = welcome()

  return (
    <Container>
      <Welcome>{message}, <span>@{user?.username}</span></Welcome>
      <OpenLineups />
      <ClosedLineups />
    </Container>
  )
}
