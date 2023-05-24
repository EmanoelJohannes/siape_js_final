import React, { useState } from 'react'
import Image from 'next/image'

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
  PlayerScore,
  PlayerImage
} from './styles'

const AccordionItems = ({
  players,
  scouts,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight
}) =>
  players.map((item, i) => {
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
            <PlayerScore className="score">
              {scout?.value || '0'} Pts
            </PlayerScore>
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

export default function AccordionPlayers({ players, scouts }) {
  const [currentAccordion, setCurrentAccordion] = useState(0)
  const [bodyHeight, setBodyHeight] = useState(0)

  return (
    <AccordionContainer>
      <h2>Your Lineup</h2>
      <AccordionInner>
        <AccordionItems
          players={players}
          scouts={scouts}
          refs={players}
          currentAccordion={currentAccordion}
          setCurrentAccordion={setCurrentAccordion}
          setBodyHeight={setBodyHeight}
          bodyHeight={bodyHeight}
        />
      </AccordionInner>
    </AccordionContainer>
  )
}
