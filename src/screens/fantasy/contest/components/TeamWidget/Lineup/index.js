import React, { useState, useEffect, useMemo, useCallback } from 'react'
import Image from 'next/image'

import { api } from '@/services/api'

import {
  Container,
  Player,
  PlayerInfo,
  PlayerScore,
  PlayerContainer,
  PlayerMarketInfo,
  PlayerMarketName,
  PlayerInformation,
  PlayerImage
} from './styles'

export default function Lineup({ contest }) {
  const [lineup, setLineup] = useState(null)
  const [scouts, setScouts] = useState(null)

  useEffect(() => {
    async function fetch() {
      const { data } = await api.get(`/lineups/contest/${contest.id}/self`)
      setLineup(data)
    }

    fetch()
  }, [contest])

  useEffect(() => {
    async function fetch() {
      const { data } = await api.get(`/lineups/${lineup.id}/scouts`)
      setScouts(data)
    }

    if (lineup) fetch()
  }, [lineup])

  const PlayerDraft = useCallback(
    () => (
      <PlayerContainer>
        <PlayerMarketInfo>
          <PlayerImage>
            <Image
              width={40}
              height={40}
              src="/tbd_player.png"
              alt="Escolha um jogador"
              objectFit="cover"
            />
          </PlayerImage>
          <PlayerInformation>
            <PlayerMarketName>Empty</PlayerMarketName>
          </PlayerInformation>
        </PlayerMarketInfo>
      </PlayerContainer>
    ),
    []
  )

  const drafts = useMemo(() => {
    if (lineup && lineup.players) {
      return new Array(5 - lineup.players.length)
    }

    return new Array(5)
  }, [lineup])

  const BlankDraft = useCallback(
    () => drafts.fill(0).map((_, index) => <PlayerDraft key={index} />),
    [drafts]
  )

  return (
    <Container>
      {lineup?.players.map(item => {
        const scout = scouts
          ? scouts.find(scout => scout.playerId === item.id)
          : null

        return (
          <Player key={item.id}>
            <PlayerInfo>
              <PlayerImage>
                <Image
                  width={40}
                  height={40}
                  src="/tbd_player.png"
                  alt={item.name}
                  objectFit="cover"
                />
              </PlayerImage>
              <div>
                <p>{item.name}</p>
                <span>{item.team.name}</span>
              </div>
            </PlayerInfo>
            <PlayerScore className="score">
              {scout?.value || '0'} Pts
            </PlayerScore>
          </Player>
        )
      })}
      <BlankDraft />
    </Container>
  )
}
