import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { api } from '@/services/api'

import Button from '@/components/Button'

import { Container, Content, Rank, Icon, TrophyFillIcon } from './styles'

export default function Result({ contest }) {
  const router = useRouter()
  const [rankingSelf, setRankingSelf] = useState(null)

  useEffect(() => {
    async function fetch() {
      const { data } = await api.get(`/rankings/contests/${contest.id}/self`)
      setRankingSelf(data)
    }
    fetch()
  }, [contest])

  return (
    <Container>
      <Content>
        <Icon>
          <TrophyFillIcon />
        </Icon>
        <Rank>
          <h2>You Score</h2>
          <span>{rankingSelf?.value || '0'} Pts</span>
        </Rank>
      </Content>
      <Button
        type="secondary"
        onClick={() => router.push(`/fantasy/contests/${contest.id}/rankings`)}
      >
        Ranking
      </Button>
    </Container>
  )
}
