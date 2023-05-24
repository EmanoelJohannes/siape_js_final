import React, { useCallback, useMemo } from 'react'
import Image from 'next/image'

import Button from '@/components/Button'

import {
  Container,
  Actions,
  LineUpContainer,
  MinusIcon,
  ButtonPlayer,
  DisplayColumn,
  DisplayRow,
  PlayerContainer,
  PlayerMarketInfo,
  PlayerMarketName,
  PlayerMarketTeam,
  PlayerScore,
  Dot,
  PlayerImage
} from './styles'

export default function LineUpPlayers({
  loading,
  open,
  players,
  scouts,
  update,
  save,
  clear
}) {
  const drafts = useMemo(() => new Array(5 - players.length), [players])

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
          <DisplayColumn>
            <PlayerMarketName>Empty</PlayerMarketName>
          </DisplayColumn>
        </PlayerMarketInfo>
      </PlayerContainer>
    ),
    []
  )

  const BlankDraft = useCallback(
    () => drafts.fill(0).map((_, index) => <PlayerDraft key={index} />),
    [drafts]
  )

  return (
    <Container>
      <LineUpContainer>
        <h2>Your Lineup</h2>
        {players.map(item => {
          const scout = scouts
            ? scouts.find(scout => scout.playerId === item.id)
            : null

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
                <PlayerScore className="score">
                  {scout?.value || '0'} Pts
                </PlayerScore>

                {open && (
                  <ButtonPlayer
                    onClick={() => update({ player: item })}
                  >
                    <MinusIcon />
                  </ButtonPlayer>
                )}
              </DisplayRow>
            </PlayerContainer>
          )
        })}
        <BlankDraft />
      </LineUpContainer>
      {open && (
        <Actions>
          <Button type="secondary" onClick={clear}>
            Clear
          </Button>
          <Button loading={loading} onClick={save}>
            Save
          </Button>
        </Actions>
      )}
    </Container>
  )
}
