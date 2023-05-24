import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { api } from '@/services/api'

import PlayerMarketShimmer from '@/components/Shimmer/PlayerMarketShimmer'

import {
  Container,
  ButtonPlayer,
  DisplayColumn,
  DisplayRow,
  DotsIcon,
  CheckIcon,
  SearchIcon,
  SearchInput,
  PlayerMarketContainer,
  PlayerContainer,
  PlayerMarketInfo,
  PlayerMarketName,
  PlayerMarketTeam,
  PlayerMarketAvg,
  Dot,
  PlayerImage
} from './styles'

export default function PlayerScouts({ contest }) {
  const [scouts, setScouts] = useState([])

  useEffect(() => {
    async function fetch() {
      const { data } = await api.get(`/contests/${contest.id}/statistics`)
      setScouts(data.scores)
    }

    if (contest) fetch()
  }, [contest])

  return (
    <Container>
      <PlayerMarketContainer>
        <h2>Player partials</h2>
        {scouts && scouts.length > 0 ? (
          <>
            {scouts.map(item => {
              return (
                <PlayerContainer key={item.id}>
                  <PlayerMarketInfo>
                    <PlayerImage>
                      <Image
                        width={40}
                        height={40}
                        src="/tbd_player.png"
                        alt={item.name}
                        objectFit="cover"
                      />
                    </PlayerImage>
                    <DisplayColumn>
                      <PlayerMarketName>{item.name}</PlayerMarketName>
                      <PlayerMarketTeam>
                        {item.team.name}
                        {item.role && (
                          <>
                            <Dot /> {item.role.name}
                          </>
                        )}
                      </PlayerMarketTeam>
                    </DisplayColumn>
                  </PlayerMarketInfo>
                  <DisplayRow>
                    <DisplayColumn>
                      <PlayerMarketName>
                        {item.score ? parseInt(item.score) : '-'}
                      </PlayerMarketName>
                      <PlayerMarketAvg>PTs</PlayerMarketAvg>
                    </DisplayColumn>
                  </DisplayRow>
                </PlayerContainer>
              )
            })}
          </>
        ) : (
          <>
            <PlayerMarketShimmer />
            <PlayerMarketShimmer />
            <PlayerMarketShimmer />
            <PlayerMarketShimmer />
            <PlayerMarketShimmer />
            <PlayerMarketShimmer />
          </>
        )}
      </PlayerMarketContainer>
    </Container>
  )
}
