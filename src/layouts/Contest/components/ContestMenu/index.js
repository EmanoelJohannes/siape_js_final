import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Container, Menu } from './styles'

export default function ContestMenu() {
  const router = useRouter()

  const { id } = router.query

  return (
    <Container>
      <Link href={`/fantasy/contests/${id}/overview`}>
        <Menu active={router.pathname.includes('/overview') && true}>
          Overview
        </Menu>
      </Link>
      <Link href={`/fantasy/contests/${id}/team`}>
        <Menu active={router.pathname.includes('/team') && true}>
          Team
        </Menu>
      </Link>
      <Link href={`/fantasy/contests/${id}/matches`}>
        <Menu active={router.pathname.includes('/matches') && true}>
          Matches
        </Menu>
      </Link>
      <Link href={`/fantasy/contests/${id}/rankings`}>
        <Menu active={router.pathname.includes('/rankings') && true}>
          Ranking
        </Menu>
      </Link>
    </Container>
  )
}
