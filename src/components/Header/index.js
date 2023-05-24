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
  BarWrapper,
  NavigationWrapper,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  IconsWrapper,
  ButtonWrapper,
  NextIcon,
  PreviousIcon,
  StattrakIcon,
  Desktop,
  Mobile
} from './styles'

export default function Header() {
  const router = useRouter()

  const { isAuthenticated } = useAuth()

  return (
    <Container>
      <BarWrapper>
        <NavigationWrapper>
          <button onClick={() => router.back()}>
            <PreviousIcon />
          </button>
          <button onClick={() => router.back()}>
            <NextIcon />
          </button>
        </NavigationWrapper>
        <SearchWrapper>
          <SearchInput placeholder="Search" />
          <SearchIcon />
        </SearchWrapper>
      </BarWrapper>

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
          <>
            <ButtonWrapper>
              <Link href="/auth/signin">
                <Button type="secondary">Login</Button>
              </Link>
            </ButtonWrapper>
            <ButtonWrapper>
              <Link href="/auth/signup">
                <Button type="primary">Sign up</Button>
              </Link>
            </ButtonWrapper>
          </>
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
