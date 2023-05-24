import React, { useState } from 'react'
import Link from 'next/link'
import { Popover } from 'react-tiny-popover'

import { useAuth } from '@/hooks/useAuth'

import {
  Container,
  PopoverMenu,
  MenuButton,
  AccountIcon,
  SettingsIcon,
  WalletIcon,
  LogOutIcon,
  Divisor
} from './styles'

export default function AccountMenu() {
  const [open, setOpen] = useState(false)

  const { user, singOut } = useAuth()

  console.log(user)

  return (
    <Popover
      isOpen={open}
      positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
      onClickOutside={() => setOpen(false)}
      content={
        <PopoverMenu>
          <Link href="/account" passHref>
            <MenuButton>
              <AccountIcon src={'/icon.png'} alt="Stattrak" />
              <span>@{user.name}</span>
            </MenuButton>
          </Link>
          <Divisor />
          <Link href="/account/wallet" passHref>
            <MenuButton>
              <WalletIcon />
              <span>Wallet</span>
            </MenuButton>
          </Link>
          <Link href="/account/settings/general" passHref>
            <MenuButton>
              <SettingsIcon />
              <span>Settings</span>
            </MenuButton>
          </Link>
          <MenuButton onClick={singOut}>
            <LogOutIcon />
            <span>Sign out</span>
          </MenuButton>
        </PopoverMenu>
      }
    >
      <Container onClick={() => setOpen(!open)}>
        <AccountIcon src={'/icon.png'} alt="Stattrak" />
      </Container>
    </Popover>
  )
}
