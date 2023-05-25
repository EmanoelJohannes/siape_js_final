import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import { useAuth } from '@/hooks/useAuth'

import Button from '../Button'
import HelpMenu from '../HelpMenu'
import NotificationsMenu from '../NotificationsMenu'
import AccountMenu from '../AccountMenu'

import {
  Container,
  IconsWrapper,
  ButtonWrapper,
  StattrakIcon,
  Desktop,
  Mobile
} from './styles'

export default function Header() {

  const { isAuthenticated } = useAuth()

  return (
    <Container>
    
      <Desktop>
        <IconsWrapper>
          <HelpMenu />
        </IconsWrapper>

        {isAuthenticated ? (
          <>
            <IconsWrapper>
              <NotificationsMenu />
            </IconsWrapper>
            <IconsWrapper>
              <AccountMenu />
            </IconsWrapper>
          </>
        ) : (
          <ButtonWrapper>
            <Link href="/auth/signin">
              <Button type="secondary">Login</Button>
            </Link>
          </ButtonWrapper>
        )}
      </Desktop>

      <Mobile>
        <StattrakIcon>
          <Image
            width={120}
            height={48}
            src="/icon_branco_st_1.svg"
            alt="Stattrak Logo"
          />
        </StattrakIcon>

        <>
          <IconsWrapper>
            <HelpMenu />
          </IconsWrapper>

          {isAuthenticated ? (
            <></>
          ) : (
            <>
              <ButtonWrapper>
                <Link href="/auth/signin">
                  <Button type="secondary">Login</Button>
                </Link>
              </ButtonWrapper>
            </>
          )}
        </>
      </Mobile>
    </Container>
  )
}
