import React from 'react'
import Link from 'next/link'

import Button from '../Button'

import { Container, Title, Description } from './styles'

export default function BlankState({ title, description, action, to }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {action && to && (
        <Link href={to} passHref>
          <a>
            <Button>{action}</Button>
          </a>
        </Link>
      )}
    </Container>
  )
}
