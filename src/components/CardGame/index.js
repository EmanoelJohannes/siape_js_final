import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Container, Header } from './styles'

export function CardGame({ name, src, to, tournaments, game, comming }) {
  const numbers = tournaments
    ? tournaments.filter(item => item.game.slug === game).length
    : 0

  return (
    <Link href={to} passHref>
      <Container>
        <Header comming={comming}>
          <Image width={200} height={277} src={src} alt={name} />
        </Header>
        <span>{name}</span>
        <p>{numbers} Tournaments</p>
      </Container>
    </Link>
  )
}
