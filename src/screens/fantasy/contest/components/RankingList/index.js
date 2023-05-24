import React, { useState, useEffect } from 'react'

import { api } from '@/services/api'
import { useAPI } from '@/hooks/useAPI'

import ListBigShimmer from '@/components/Shimmer/ListBigShimmer'

import {
  Container,
  Table,
  TableContent,
  Content,
  Avatar,
  User,
  Position,
  Score,
  RankingsBlankState
} from './styles'

export default function RankingList({ contest }) {
  const { data } = useAPI({
    url: `/rankings/contests/${contest.id}`
  })

  return (
    <Container>
      {data ? (
        <>
          {data.length === 0 && (
            <RankingsBlankState>
              <h2>No results for this ranking</h2>
              <span>
                This competition hasn&apos;t started or we don&apos;t have the
                best finishers at the moment.
              </span>
            </RankingsBlankState>
          )}
          <Table>
            {data.map(item => (
              <TableContent key={item.id}>
                <Content>
                  <Position>{item.position}º</Position>
                  <Avatar src={'/tbd_player.png'} width={48} height={48} />
                  <User>
                    <p>{item.user.teamname}</p>
                    <span>@{item.user.username}</span>
                  </User>
                </Content>
                <Content>
                  <Score>{item.value} PTs</Score>
                </Content>
              </TableContent>
            ))}
          </Table>
        </>
      ) : (
        <ListBigShimmer />
      )}
    </Container>
  )
}
