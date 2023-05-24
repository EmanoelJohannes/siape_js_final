import React from 'react'
import StickyBox from 'react-sticky-box'

import { Container, Body } from './styles'

export function SideBar() {
  return (
    <Container>
      <StickyBox>
        <Body>Body da side bar</Body>
      </StickyBox>
    </Container>
  )
}
