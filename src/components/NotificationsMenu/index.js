import React, { useState } from 'react'
import Link from 'next/link'
import { Popover } from 'react-tiny-popover'

import {
  Container,
  HelpIcon,
  PopoverMenu,
  MenuButton,
  NotificationsIcon,
  IconContainer,
  OptionContainer,
  ViewAllButon,
} from './styles'

export default function NotificationsMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Popover
      isOpen={open}
      positions={['top', 'bottom', 'left', 'right']}
      onClickOutside={() => setOpen(false)}
      content={
        <PopoverMenu>
          <Link href="#" passHref>
            <MenuButton>
              <OptionContainer>
                <p>Lançamento da plataforma SIAPE, seja bem vindo!</p>
                <span>Hoje, 09:35</span>
              </OptionContainer>
            </MenuButton>
          </Link>

          <Link href="#" passHref>
            <ViewAllButon>Ver todos</ViewAllButon>
          </Link>
        </PopoverMenu>
      }
    >
      <Container onClick={() => setOpen(!open)}>
        <NotificationsIcon />
      </Container>
    </Popover>
  )
}
