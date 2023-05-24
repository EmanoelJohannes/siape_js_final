import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  SettingsMenuContainer,
  SettingsMenuOption,
  SettingsIcon,
  SecurityIcon
} from './styles'

export default function SettingsMenu() {
  const router = useRouter()

  const hasSettingsUrl = router.pathname.includes('settings')

  return (
    <SettingsMenuContainer hasSettingsUrl={hasSettingsUrl}>
      <span>ACCOUNT</span>

      <Link href="/account/settings/general" passHref>
        <SettingsMenuOption
          active={router.pathname === '/account/settings/general'}
        >
          <SettingsIcon />
          <div>
            <p>General settings</p>
            <span>Change you profile infos here.</span>
          </div>
        </SettingsMenuOption>
      </Link>

      <Link href="/account/settings/security" passHref>
        <SettingsMenuOption
          active={router.pathname === '/account/settings/security'}
        >
          <SecurityIcon />
          <div>
            <p>Security</p>
            <span>Change your security settings.</span>
          </div>
        </SettingsMenuOption>
      </Link>
    </SettingsMenuContainer>
  )
}
