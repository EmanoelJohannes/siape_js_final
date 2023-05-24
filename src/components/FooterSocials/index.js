import React from 'react'
import Link from 'next/link'

import { SocialButtonsWrapper, Button, TwitterIcon, InstagramIcon, FacebookIcon, LinkedinIcon } from './styles'

export function FooterSocials() {
  return (
    <SocialButtonsWrapper>
      <Link href="https://twitter.com/stattrakgg" target="_blank" passHref>
        <Button hoverColor="#1DA1F2">
          <TwitterIcon />
        </Button>
      </Link>
      <Link href="https://twitter.com/stattrakgg" target="_blank" passHref>
        <Button hoverColor="#C13584">
          <InstagramIcon />
        </Button>
      </Link>
      <Link href="https://facebook.com/stattrakesports" target="_blank" passHref>
        <Button hoverColor="#4267B2">
          <FacebookIcon />
        </Button>
      </Link>
      <Link href="https://linkedin.com/company/stattrakgg" target="_blank" passHref>
        <Button hoverColor="#0e76a8">
          <LinkedinIcon />
        </Button>
      </Link>
    </SocialButtonsWrapper>
  )
}
