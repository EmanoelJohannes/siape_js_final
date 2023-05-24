import React from 'react'
import { Container as BootstrapContainer } from 'styled-bootstrap-grid'

import { MenuBar } from '../../components/MenuBar'
import { SideBar } from '../../components/SideBar'
import Header from '../../components/Header'
import MobileBottomMenu from '../../components/MobileBottomMenu'
import Footer from '../../components/Footer'

import { Container, Content, Wrapper } from './styles'

export default function Layout({ children }) {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Content>
          <Header />
          <BootstrapContainer>{children}</BootstrapContainer>
          <MobileBottomMenu />
          <Footer />
        </Content>
        {false && <SideBar />}
      </Wrapper>
    </Container>
  )
}
