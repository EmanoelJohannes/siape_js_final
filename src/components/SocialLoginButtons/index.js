import React from 'react'

import { SocialLoginButton } from '../SocialLoginButton'
import { SocialButtonsWrapper } from './styles'
import { Twitter, InstagramAlt, FacebookCircle, Linkedin } from '../../../assets/icons'

export function SocialLoginButtons(props) {
  return (
    <SocialButtonsWrapper>
      <SocialLoginButton
        size={props.size}
        icon={<Twitter />}
        hoverColor="#1DA1F2"
        url="https://twitter.com/stattrakgg"
      />
      <SocialLoginButton
        size={props.size}
        icon={<InstagramAlt />}
        hoverColor="#C13584"
        url="https://instagram.com/stattrakgg"
      />
         <SocialLoginButton
        size={props.size}
        icon={<FacebookCircle />}
        hoverColor="#4267B2"
        url="https://facebook.com/stattrakesports"
      />
      <SocialLoginButton
        size={props.size}
        icon={<Linkedin />}
        hoverColor="#0e76a8"
        url="https://linkedin.com/company/stattrakgg"
      />
    </SocialButtonsWrapper>
  )
}
