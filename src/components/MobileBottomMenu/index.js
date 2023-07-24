import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useAuth } from '@/hooks/useAuth'

import {
  BottomMenu,
  MenuButton,
  HomeIcon,
} from './styles'

export default function MobileBottomMenu() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  return (
    <BottomMenu>
      <Link href="/dashboard" passHref>
        <MenuButton className={router.pathname === '/' && 'active'}>
          <HomeIcon />
        </MenuButton>
      </Link>

      {isAuthenticated && (
        <Link href="/docentes" passHref>
          <MenuButton
            className={router.pathname === '/account/dashboard' && 'active'}
          >
            Docentes
          </MenuButton>
        </Link>
      )}

      <Link href="/discentes" passHref>
        <MenuButton className={router.pathname.includes('fantasy') && 'active'}>
          Discentes
        </MenuButton>
      </Link>

      <Link href="/externos" passHref>
        <MenuButton className={router.pathname.includes('fantasy') && 'active'}>
          Externos
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
        <Link href="/departamentos" passHref>
          <MenuButton
            className={router.pathname.includes('settings') && 'active'}
          >
            Departamentos
          </MenuButton>
        </Link>
      )}
    </BottomMenu>
  )
}
