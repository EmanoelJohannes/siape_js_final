import React, { useState, useEffect } from 'react'

import { api } from '@/services/api'
import { useAuth } from '@/hooks/useAuth'

import {
  Container,
  Table,
  TableContent,
  Content,
  Avatar,
  User,
  Position,
  Score
} from './styles'

export default function RankingSelf({ contest }) {
  const [ranking, setRanking] = useState(null)

  useEffect(() => {
    async function fetch() {
      const { data } = await api.get(`/rankings/contests/${contest.id}/self`)
      setRanking(data)
    }

    fetch()
  }, [contest])

  const { user } = useAuth()

  return (
    <Container>
      <Table>
        <TableContent>
          <Content>
            <Position>{ranking ? ranking.position: '-'} º</Position>
            <Avatar src={'/tbd_player.png'} width={48} height={48} />
            <User>
              <p>{user?.teamname}</p>
              <span>@{user?.username}</span>
            </User>
          </Content>
          <Content>
            <Score>{ranking ? ranking.value : '-'} PTs</Score>
          </Content>
        </TableContent>
      </Table>
    </Container>
  )
}
