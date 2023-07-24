import React from 'react'
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
import { Box, Typography } from '@mui/material'
import { parseCookies } from 'nookies'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Header() {
  const { isAuthenticated } = useAuth()

  const [action, setAction] = useState(null)

  useEffect(() => {
    const { '@siape:action': actionCookie } = parseCookies()
    setAction(actionCookie)
  }, [])

  return (
    <Container>
      <Desktop>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '20px',
            flexDirection: 'row'
          }}
        >
            <Typography
              display="flex"
              flexDirection="row"
              alignItems="center"
              color="#ffd789"
            >
              Ação selecionada: {action}
            </Typography>
        </Box>
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
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ color: 'white' }}>SIAPE</Typography>
        </Box>

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
