import React from 'react'
import Link from 'next/link'

import Button from '../../components/Button'

import { Container, Header } from './styles'

export default function Error() {
  return (
    <Container>
      <Header>
        <h1>Opps!</h1>
        <span>Error occurred. Something went wrong</span>
        <Link href="/" passHref>
          <Button>Back to home</Button>
        </Link>
      </Header>
    </Container>
  )
}
