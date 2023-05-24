import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useAuth } from '@/hooks/useAuth'

import {
  BottomMenu,
  MenuButton,
  HomeIcon,
  DashboardIcon,
  FantasyIcon,
  PredictionsIcon,
  SettingsIcon
} from './styles'

export default function MobileBottomMenu() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  return (
    <BottomMenu>
      <Link href="/" passHref>
        <MenuButton className={router.pathname === '/' && 'active'}>
          <HomeIcon />
        </MenuButton>
      </Link>

      {isAuthenticated && (
        <Link href="/account/dashboard" passHref>
          <MenuButton
            className={router.pathname === '/account/dashboard' && 'active'}
          >
            <DashboardIcon />
          </MenuButton>
        </Link>
      )}

      <Link href="/fantasy" passHref>
        <MenuButton className={router.pathname.includes('fantasy') && 'active'}>
          <FantasyIcon />
        </MenuButton>
      </Link>

      {/* <Link href="/predictions" passHref>
        <MenuButton
          className={router.pathname.includes('predictions') && 'active'}
        >
          <PredictionsIcon />
        </MenuButton>
      </Link> */}

      {isAuthenticated && (
        <Link href="/account/settings/general" passHref>
          <MenuButton
            className={router.pathname.includes('settings') && 'active'}
          >
            <SettingsIcon />
          </MenuButton>
        </Link>
      )}
    </BottomMenu>
  )
}
