import React, { useState } from 'react'
import Link from 'next/link'
import { Popover } from 'react-tiny-popover'

import {
  Container,
  HelpIcon,
  PopoverMenu,
  MenuButton,
  EmailIcon,
  LightbulbIcon
} from './styles'

export default function HelpMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Popover
      isOpen={open}
      positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
      onClickOutside={() => setOpen(false)}
      content={
        <PopoverMenu>
          <Link href="#" passHref>
            <MenuButton>
              <LightbulbIcon />
              <span>Conheça o projeto</span>
            </MenuButton>
          </Link>
          <Link href="#" passHref>
            <MenuButton>
              <EmailIcon />
              <span>Suporte</span>
            </MenuButton>
          </Link>
        </PopoverMenu>
      }
    >
      <Container onClick={() => setOpen(!open)}>
        <HelpIcon />
      </Container>
    </Popover>
  )
}
