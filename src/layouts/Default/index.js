import React from 'react'

import { MenuBar } from '@/components/MenuBar'
import Header from '@/components/Header'
import MobileBottomMenu from '@/components/MobileBottomMenu'
import Footer from '@/components/Footer'

import { Container, Content, Wrapper, PaddingWrapper } from './styles'

export default function Layout({ children }) {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Content>
          <Header />
          <PaddingWrapper>{children}</PaddingWrapper>
          <MobileBottomMenu />
          <Footer />
        </Content>
      </Wrapper>
    </Container>
  )
}
