import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { api } from '@/services/api'

import PlayerMarketShimmer from 'components/Shimmer/PlayerMarketShimmer'

import {
  AccordionContainer,
  AccordionInner,
  AccordionItem,
  SetModalButton,
  AccordionBody,
  AccordionContent,
  Dot,
  StyledChevron,
  PlayerContainer,
  PlayerMarketInfo,
  DisplayColumn,
  DisplayRow,
  PlayerMarketName,
  PlayerMarketTeam,
  PlayerMarketAvg,
  PlayerImage
} from './styles'

const AccordionItems = ({
  scores,
  scouts,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight
}) =>
  scores.map((item, i) => {
    const scout = scouts
      ? scouts.find(scout => scout.playerId === item.id)
      : null

    const playerScouts = scout ? JSON.parse(scout.payload) : []

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
            <SetModalButton>
              <StyledChevron active={currentAccordion == i} aria-hidden />
            </SetModalButton>
          </DisplayRow>
        </PlayerContainer>
        <AccordionBody active={currentAccordion === i} bodyHeight={bodyHeight}>
          <AccordionContent ref={refs[i]}>
            <p>Players Scouts</p>
            <ul>
              {playerScouts.map(item => (
                <li key={item.name}>
                  <p>{item.name}</p>
                  <p>{item.score}</p>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionBody>
      </AccordionItem>
    )
  })

export default function AccordionPlayersScouts({ contest, scouts }) {
  const [currentAccordion, setCurrentAccordion] = useState(0)
  const [bodyHeight, setBodyHeight] = useState(0)
  const [scores, setScores] = useState([])

  useEffect(() => {
    async function fetch() {
      const { data } = await api.get(`/contests/${contest.id}/statistics`)
      setScores(data.scores)
    }

    if (contest) fetch()
  }, [contest])

  return (
    <AccordionContainer>
      <h2>Player partials</h2>
      <AccordionInner>
        {scores && scores.length > 0 ? (
          <AccordionItems
            scores={scores}
            scouts={scouts}
            refs={scores}
            currentAccordion={currentAccordion}
            setCurrentAccordion={setCurrentAccordion}
            setBodyHeight={setBodyHeight}
            bodyHeight={bodyHeight}
          />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <PlayerMarketShimmer />
            <PlayerMarketShimmer />
            <PlayerMarketShimmer />
            <PlayerMarketShimmer />
          </div>
        )}
      </AccordionInner>
    </AccordionContainer>
  )
}
