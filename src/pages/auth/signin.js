import React from 'react'
import { parseCookies } from 'nookies'

import SignIn from '@/screens/signin'

export default function SignInPage() {
  return <SignIn />
}

export const getStaticProps = async (ctx) => {
  const { ['@siape:token']: token } = parseCookies(ctx)

  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}
