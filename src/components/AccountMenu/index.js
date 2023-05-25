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
  UserIcon,
  LogOutIcon,
  Divisor
} from './styles'

export default function AccountMenu() {
  const [open, setOpen] = useState(false)

  const { user, singOut } = useAuth()

  return (
    <Popover
      isOpen={open}
      positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
      onClickOutside={() => setOpen(false)}
      content={
        <PopoverMenu>
          <Link href="#" passHref>
            <MenuButton>
              <span>{user.name}</span>
            </MenuButton>
          </Link>
          <Divisor />
          <Link href="#" passHref>
            <MenuButton>
              <SettingsIcon />
              <span>Configurações</span>
            </MenuButton>
          </Link>
          <MenuButton onClick={singOut}>
            <LogOutIcon />
            <span>Sair</span>
          </MenuButton>
        </PopoverMenu>
      }
    >
      <Container onClick={() => setOpen(!open)}>
        <UserIcon />
      </Container>
    </Popover>
  )
}
