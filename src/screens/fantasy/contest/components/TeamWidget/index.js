import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { api } from '@/services/api'

import ListShimmer from '@/components/Shimmer/ListShimmer'
import BlankState from './BlankState'
import Lineup from './Lineup'
import Result from './Result'

import { Container, LineupButton } from './styles'

export default function TeamWidget({ contest }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [open, _] = useState(
    new Date().toISOString() < contest.tournament.closedAt
  )
  const [lineup, setLineup] = useState(null)

  useEffect(() => {
    async function fetch() {
      const { data } = await api.get(`/lineups/contest/${contest.id}/self`)
      setLineup(data)
      setLoading(false)
    }

    fetch()
  }, [contest])

  const handleShowLineup = async () => {
    router.push(`/fantasy/contests/${contest.id}/team`)
  }

  const OpenContest = () => (
    <>
      {lineup === null && (
        <>
          <BlankState>
            <h2>Create your team</h2>
            <span>You don&apos;t have a team for this contest yet :(</span>
          </BlankState>
          <LineupButton onClick={handleShowLineup}>Create lineup</LineupButton>
        </>
      )}
      {lineup && (
        <>
          <Lineup contest={contest} lineup={lineup} />
          <LineupButton onClick={handleShowLineup}>Edit lineup</LineupButton>
        </>
      )}
    </>
  )

  const ClosedContest = () => (
    <>
      {lineup === null && (
        <>
          <BlankState>
            <h2>You didn&apos;t team up for this round</h2>
            <span>Check out other open competitions</span>
          </BlankState>
        </>
      )}
      {lineup && (
        <>
          <Result contest={contest} lineup={lineup} />
          <Lineup contest={contest} lineup={lineup} />
          <LineupButton onClick={handleShowLineup}>Your lineup</LineupButton>
        </>
      )}
    </>
  )

  if (loading)
    return (
      <Container>
        <h2>My team</h2>
        <ListShimmer />
      </Container>
    )

  return (
    <Container>
      <h2>My team</h2>
      {open ? <OpenContest /> : <ClosedContest />}
    </Container>
  )
}
