import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from './styles'

export function SocialLoginButton(props) {
  return (
    <Link href={props.url} target="_blank" passHref>
      <Button size={props.size} hoverColor={props.hoverColor}>
        <Image
          width={props.size == 'small' ? '20' : '30'}
          height={props.size == 'small' ? '20' : '30'}
          src={props.icon}
          alt="Social Login"
        />
      </Button>
    </Link>
  )
}
