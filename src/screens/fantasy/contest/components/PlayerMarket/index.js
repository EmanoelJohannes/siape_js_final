import React, { useState } from 'react'
import Image from 'next/image'
import { useDebounce } from '@react-hooks-library/core'

import { useAPI } from '@/hooks/useAPI'
import { formatPrice } from '@/utils/money'

import MatcheCardMini from '@/components/MatcheCardMini'
import PlayerMarketShimmer from '@/components/Shimmer/PlayerMarketShimmer'

import {
  AccordionInner,
  AccordionItem,
  AccordionBody,
  ButtonPlayer,
  DisplayColumn,
  DisplayRow,
  CheckIcon,
  MinusIcon,
  SearchIcon,
  SearchInput,
  PlayerMarketContainer,
  PlayerContainer,
  PlayerMarketInfo,
  PlayerImage,
  PlayerMarketName,
  PlayerMarketTeam,
  PlayerMarketAvg,
  Dot,
  AccordionContent,
  SetModalButton,
  StyledChevron
} from './styles'

const AccordionItems = ({
  players,
  lineupPlayers,
  statistics,
  update,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight
}) =>
  players.map((item, i) => {
    const playerStatistics = statistics?.find(
      playerStatistic => playerStatistic.id === item.id
    )

    const playerAverageScore = playerStatistics?.scouts.reduce(
      (total, { value }) => total + parseFloat(value),
      0
    )

    const playerContains = lineupPlayers.find(player => player.id === item.id)

    return (
      <AccordionItem
        key={`accordion-item-${i}`}
        onClick={() => {
          if (currentAccordion == i) {
            setCurrentAccordion(null)
          } else {
            setCurrentAccordion(i)
            setBodyHeight(refs[i].current.clientHeight)
          }
        }}
      >
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
              <PlayerMarketName>
                {item.name}
              </PlayerMarketName>
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
              <PlayerMarketName>${formatPrice(item.price)}</PlayerMarketName>
              <PlayerMarketAvg>
                AVG {playerAverageScore ? playerAverageScore : '-'}
                {` `}PTs
              </PlayerMarketAvg>
            </DisplayColumn>
            <SetModalButton className="score">
              <StyledChevron active={currentAccordion == i} aria-hidden />
            </SetModalButton>
            <ButtonPlayer
              onClick={() => update({ player: item })}
              backgroundColor={playerContains ? "#F5ADBA" : "#FFD789"}
            >
              {playerContains ? <MinusIcon /> : <CheckIcon />}
            </ButtonPlayer>
          </DisplayRow>
        </PlayerContainer>
        <AccordionBody active={currentAccordion === i} bodyHeight={bodyHeight}>
          <AccordionContent ref={refs[i]}>
            <p>Player matches</p>
            {playerStatistics?.matches.map(item => (
              <MatcheCardMini key={item.id} matche={item} />
            ))}
            <p>Latest player results</p>
            <ul>
              {playerStatistics?.scouts.map((item, index) => (
                <li key={index}>
                  <p>
                    {item.league.name}: {item.tournament.name}
                  </p>
                  <p>{item.value}</p>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionBody>
      </AccordionItem>
    )
  })

export default function AccordionPlayerMarket({ lineup, players, update }) {
  const [currentAccordion, setCurrentAccordion] = useState(0)
  const [bodyHeight, setBodyHeight] = useState(0)
  const [term, setTerm] = useState('')

  const debouncedText = useDebounce(term, 1000)

  const { data: allPlayers } = useAPI({
    url: debouncedText
      ? `/tournaments/${lineup.tournamentId}/players?name=${debouncedText}`
      : `/tournaments/${lineup.tournamentId}/players`
  })

  const { data: tournamentStatistics } = useAPI({
    url: `/statistics/tournaments/${lineup.tournamentId}/players/statistics`
  })

  return (
    <PlayerMarketContainer>
      <h2>Players market</h2>
      <SearchInput
        name="term"
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder="Search for players"
      />
      <SearchIcon />
      <AccordionInner>
        {allPlayers ? (
          <AccordionItems
            players={allPlayers}
            lineupPlayers={players}
            statistics={tournamentStatistics}
            update={update}
            refs={allPlayers}
            currentAccordion={currentAccordion}
            setCurrentAccordion={setCurrentAccordion}
            setBodyHeight={setBodyHeight}
            bodyHeight={bodyHeight}
          />
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
      </AccordionInner>
    </PlayerMarketContainer>
  )
}
