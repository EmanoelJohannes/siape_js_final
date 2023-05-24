import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatRelative } from 'date-fns'

import {
  Container,
  Header,
  Date,
  Title,
  Tag,
  Details,
  TagList,
  TournamentInfo
} from './styles'

export default function CardContest({ contest }) {
  const banners = {
    lol: '/cards/lol.png',
    csgo: '/cards/csgo.png',
    valorant: '/cards/valorant.png'
  }

  const closedAt = new window.Date(contest.tournament.closedAt)
  const now = new window.Date()
  const formatedClosedAt = formatRelative(closedAt, now)

  return (
    <Link href={`/fantasy/contests/${contest.id}/overview`} passHref>
      <Container>
        <Header>
          <Image
            width={360}
            height={177}
            src={banners[contest.game.slug]}
            alt={`${contest.league.name}: ${contest.tournament.name}`}
          />
        </Header>
        <TournamentInfo>
          <Date>Closes {formatedClosedAt}</Date>
          <Title>
            {contest.league.name}: {contest.tournament.name}
          </Title>
          <TagList>
            <Tag>{contest.game.name}</Tag>
            <Tag>{contest.league.name}</Tag>
          </TagList>
          <Details>
            <div>
              <p>ENTRY</p>
              <span>Free entry</span>
            </div>

            <div>
              <p>FORMAT</p>
              <span>Classic</span>
            </div>

            <div>
              <p>PRIZE POOL</p>
              <span>15.000 SATS</span>
            </div>
          </Details>
        </TournamentInfo>
      </Container>
    </Link>
  )
}
