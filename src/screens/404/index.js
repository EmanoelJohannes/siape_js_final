import React from 'react'
import Link from 'next/link'

import Button from '../../components/Button'

import { Container, Header } from './styles'

export default function NotFound() {
  return (
    <Container>
      <Header>
        <h1>Opps!</h1>
        <span>Page not found. Something went wrong</span>
        <Link href="/" passHref>
          <Button>Back to home</Button>
        </Link>
      </Header>
    </Container>
  )
}
