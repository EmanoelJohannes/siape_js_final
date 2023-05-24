import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { useAuth } from '@/hooks/useAuth'
import { formatPrice } from '@/utils/money'

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  DashboardIcon,
  FantasyIcon,
  PredictionsIcon,
  SettingsIcon,
  StattrakIcon,
  StattrakIconMobile,
  Divisor,
  MenuHeader,
  SubMenuButton,
  MenuIcon,
  Wallet
} from './styles'

export function MenuBar() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()

  return (
    <Container>
      <Topside>
        <Logo>
          <StattrakIcon>
            <Image
              width={120}
              height={48}
              src="/icon_branco_st_1.svg"
              alt="Stattrak Logo"
            />
          </StattrakIcon>
          <StattrakIconMobile>
            <Image
              width={32}
              height={32}
              src="/favicon-32x32.png"
              alt="Stattrak Logo"
            />
          </StattrakIconMobile>
        </Logo>

        <Link href="/" passHref>
          <MenuButton className={router.pathname === '/' && 'active'}>
            <HomeIcon />
            <span>Home</span>
          </MenuButton>
        </Link>

        {isAuthenticated && (
          <Link href="/account/dashboard" passHref>
            <MenuButton
              className={router.pathname === '/account/dashboard' && 'active'}
            >
              <DashboardIcon />
              <span>Dashboard</span>
            </MenuButton>
          </Link>
        )}

        <Link href="/fantasy" passHref>
          <MenuButton
            className={router.pathname.includes('fantasy') && 'active'}
          >
            <FantasyIcon />
            <span>Fantasy Game</span>
          </MenuButton>
        </Link>

        {/* <Link href="/predictions" passHref>
          <MenuButton
            className={router.pathname.includes('predictions') && 'active'}
          >
            <PredictionsIcon />
            <span>Predictions</span>
          </MenuButton>
        </Link> */}

        {isAuthenticated && (
          <Link href="/account/settings/general" passHref>
            <MenuButton
              className={router.pathname.includes('settings') && 'active'}
            >
              <SettingsIcon />
              <span>Settings</span>
            </MenuButton>
          </Link>
        )}

        <Divisor />

        <MenuHeader>
          <span>Games</span>
        </MenuHeader>

        <Link href="/fantasy/lol" passHref>
          <SubMenuButton>
            <MenuIcon
              width={24}
              height={24}
              src="/games/lol_icon.png"
              alt="League of Legends"
            />
            <span>League of Legends</span>
          </SubMenuButton>
        </Link>

        <Link href="/fantasy/csgo" passHref>
          <SubMenuButton>
            <MenuIcon
              width={24}
              height={24}
              src="/games/csgo_icon.png"
              alt="Counter-Strike: Global Ofensive"
            />
            <span>Counter-Strike: Global Ofensive</span>
          </SubMenuButton>
        </Link>

        <Link href="/fantasy/valorant" passHref>
          <SubMenuButton>
            <MenuIcon
              width={24}
              height={24}
              src="/games/valorant_icon.png"
              alt="Valorant"
            />
            <span>Valorant</span>
          </SubMenuButton>
        </Link>
      </Topside>

      {isAuthenticated && (
        <Wallet>
          <div>
            <p>Balance</p>
            <span>{formatPrice(user ? user.stats : 0)}</span>
          </div>
          <div>
            <Link href="/account/wallet">
              <a>
                <button>Wallet</button>
              </a>
            </Link>
          </div>
        </Wallet>
      )}
    </Container>
  )
}
