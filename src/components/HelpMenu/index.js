import React, { useState } from 'react'
import { setCookie } from 'nookies'
import { Popover } from 'react-tiny-popover'
import { useRouter } from 'next/router';

import {
  Container,
  PopoverMenu,
  MenuButton,
  CalendarIcon,
  BookIcon,
  GearIcon,
  MenuIcon
} from './styles'

export default function HelpMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter();

  const handleClick = async (action) => {
    setCookie(null, '@siape:action', action);

    await new Promise(resolve => setTimeout(resolve, 100));

    router.reload();
  };

  return (
    <Popover
      isOpen={open}
      positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
      onClickOutside={() => setOpen(false)}
      content={
        <PopoverMenu>
            <MenuButton onClick={() => handleClick('cursos')}>
              <BookIcon />
              <span>Cursos</span>
            </MenuButton>
            <MenuButton onClick={() => handleClick('eventos')}>
              <CalendarIcon />
              <span>Eventos</span>
            </MenuButton>
            <MenuButton onClick={() => handleClick('projetos')}>
              <GearIcon />
              <span>Projetos</span>
            </MenuButton>
        </PopoverMenu>
      }
    >
      <Container onClick={() => setOpen(!open)}>
        <MenuIcon />
      </Container>
    </Popover>
  )
}
