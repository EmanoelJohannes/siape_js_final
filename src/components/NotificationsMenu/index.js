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
      positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
      onClickOutside={() => setOpen(false)}
      content={
        <PopoverMenu>
          <Link href="https://play.google.com/store/apps/details?id=gg.stattrak.nexus" passHref>
            <MenuButton>
              <IconContainer>
                <HelpIcon />
              </IconContainer>

              <OptionContainer>
                <p>Android app are now available to everyone!</p>
                <span>a day ago</span>
              </OptionContainer>
            </MenuButton>
          </Link>

          <Link href="https://apps.apple.com/us/app/stattrak-fantasy-esports/id1607153495" passHref>
            <MenuButton>
              <IconContainer>
                <HelpIcon />
              </IconContainer>

              <OptionContainer>
                <p>IOS app are now available to everyone!</p>
                <span>a day ago</span>
              </OptionContainer>
            </MenuButton>
          </Link>

          <Link href="/" passHref>
            <ViewAllButon>View all</ViewAllButon>
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
