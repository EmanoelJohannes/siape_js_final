import React from 'react'

import { MenuBar } from '../../components/MenuBar'
import Header from '../../components/Header'
import MobileBottomMenu from '../../components/MobileBottomMenu'

import { Container, Content, Wrapper, ContentContainer } from './styles'

import SettingsMenu from "./components/SettingsMenu";
import SettingsMobileHeader from './components/SettingsMobileHeader'

export default function SettingsLayout({children}) {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Content>
          <Header />
          <ContentContainer>
            <SettingsMenu />
            <SettingsMobileHeader />
            {children}
          </ContentContainer>                
          <MobileBottomMenu />
          {/* <Footer /> */}
        </Content>
      </Wrapper>
    </Container>
  )
}
