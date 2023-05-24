import React from 'react'
import { Container as BootstrapContainer } from 'styled-bootstrap-grid'

import { MenuBar } from '../../components/MenuBar'
import Header from '../../components/Header'
import MobileBottomMenu from '../../components/MobileBottomMenu'

import { Container, Content, Wrapper } from './styles'
import Footer from '../../components/Footer'

export default function LineupLayout({children}) {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Content>
          <Header />
          <BootstrapContainer>
            {children}
          </BootstrapContainer>
          <MobileBottomMenu />
          <Footer />
        </Content>
      </Wrapper>
    </Container>
  )
}
