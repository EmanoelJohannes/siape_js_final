import React from 'react'
import { Container as BootstrapContainer } from 'styled-bootstrap-grid'

import { MenuBar } from '../../components/MenuBar'
import Header from '../../components/Header'
import MobileBottomMenu from '../../components/MobileBottomMenu'
import Footer from '../../components/Footer'
import CardHeader from './components/CardHeader'
import ContestMenu from './components/ContestMenu'

import { Container, Content, Wrapper, ContentContainer } from './styles'

export default function ContestLayout({ children, contest }) {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Content>
          <Header />
          <CardHeader contest={contest} />
          <BootstrapContainer>
            <ContentContainer>
              <ContestMenu />
              {children}
            </ContentContainer>
          </BootstrapContainer>
          <MobileBottomMenu />
          <Footer />
        </Content>
      </Wrapper>
    </Container>
  )
}
