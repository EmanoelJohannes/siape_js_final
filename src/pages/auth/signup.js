import React from 'react'
import { parseCookies } from 'nookies'

import SignUp from '@/screens/signup'

export default function SignUpPage() {
  return <SignUp />
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
