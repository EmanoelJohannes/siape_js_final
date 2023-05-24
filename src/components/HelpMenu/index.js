import React, { useState } from 'react'
import Link from 'next/link'
import { Popover } from 'react-tiny-popover'

import {
  Container,
  HelpIcon,
  PopoverMenu,
  MenuButton,
  NotificationsIcon,
  TwitterIcon,
  InstagramIcon,
  DiscordIcon,
  AndroidIcon,
  AppleIcon,
  EmailIcon,
  Divisor
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
          <Link href="https://twitter.com/stattrakgg" passHref>
            <MenuButton>
              <TwitterIcon />
              <span>Twitter</span>
            </MenuButton>
          </Link>
          <Link href="https://instagram.com/stattrakgg/" passHref>
            <MenuButton>
              <InstagramIcon />
              <span>Instagram</span>
            </MenuButton>
          </Link>
          <Link href="https://discord.gg/Q6bW4nhU" passHref>
            <MenuButton>
              <DiscordIcon />
              <span>Discord</span>
            </MenuButton>
          </Link>
          <Divisor />
          <Link href="https://play.google.com/store/apps/details?id=gg.stattrak.nexus" passHref>
            <MenuButton>
              <AndroidIcon />
              <span>Android App</span>
            </MenuButton>
          </Link>
          <Link href="https://apps.apple.com/us/app/stattrak-fantasy-esports/id1607153495" passHref>
            <MenuButton>
              <AppleIcon />
              <span>Apple App</span>
            </MenuButton>
          </Link>
          <Divisor />
          <Link href="mailto:contact@stattrak.gg" passHref>
            <MenuButton>
              <EmailIcon />
              <span>Contact Us</span>
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
