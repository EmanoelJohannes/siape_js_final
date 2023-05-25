import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  SettingsIcon,
  Divisor,
  MenuHeader,
  SubMenuButton,
} from './styles'

export function MenuBar() {
  const router = useRouter()

  return (
    <Container>
      <Topside>
        <Logo>
          <span>Extensão Sigaa - UnB</span>
        </Logo>

        <Link href="/dashboard" passHref style={{ width: '100%' }}>
          <MenuButton className={router.pathname === '/' ? 'active' : ''}>
            <HomeIcon />
            <span>Home</span>
          </MenuButton>
        </Link>

        <Divisor />

        <MenuHeader>
          <span>Indicadores</span>
        </MenuHeader>

        <Link href="/docentes" passHref style={{ width: '100%' }}>
          <SubMenuButton
            className={router.pathname === '/docentes' ? 'active' : ''}
          >
            <SettingsIcon />
            <span>Docentes</span>
          </SubMenuButton>
        </Link>

        <Link href="/discentes" passHref style={{ width: '100%' }}>
          <SubMenuButton
            className={router.pathname === '/discentes' ? 'active' : ''}
          >
            <SettingsIcon />
            <span>Discentes</span>
          </SubMenuButton>
        </Link>

        <Link href="/externos" passHref style={{ width: '100%' }}>
          <SubMenuButton
            className={router.pathname === '/externos' ? 'active' : ''}
          >
            <SettingsIcon />
            <span>Externos</span>
          </SubMenuButton>
        </Link>
      </Topside>
    </Container>
  )
}
