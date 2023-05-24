import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  BackButton,
  SettingsMobileHeaderContainer,
  SettingsIcon,
} from './styles'

export default function SettingsMobileHeader() {
  const router = useRouter()

  const generalPage = router.pathname.includes('general')
  const securityPage = router.pathname.includes('security')

  return (
    <SettingsMobileHeaderContainer isAccountPage={router.pathname == '/account'}>
      <Link href="/account" passHref>
        <BackButton>
          <SettingsIcon />
        </BackButton>
      </Link>

      {generalPage && <span>General</span>}
      {securityPage && <span>Security</span>}
    </SettingsMobileHeaderContainer>
  )
}
