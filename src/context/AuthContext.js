import { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'

import { api } from '@/services/api'
export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const isAuthenticated = !!user

  useEffect(() => {
    const { '@siape:token': token } = parseCookies()

    async function fetchUser() {
      const { data } = await api.get('/authenticate')

      setUser(data)
    }

    if (token) {
      fetchUser()
    }
  }, [])

  async function signIn({ email, password }) {
    try {
      const { data } = await api.post('/authenticate', {
        email,
        password
      })

      const { user, token, refresh } = data

      setCookie(undefined, '@siape:token', token, {
        maxAge: 30 * 24 * 60 * 60 // 30 days
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      setUser(user[0])

      Router.push('/dashboard')
    } catch (error) {
      if (error?.response?.data) {
        throw new Error(error.response.data.error)
      }

      throw new Error('An error has occurred')
    }
  }

  async function signUp({ email, name, password}) {
    try {
      const { data } = await api.post('/auth/register', {
        email: email.toLowerCase(),
        name,
        password
      })

      const { user, token } = data

      setCookie(undefined, '@siape:token', token, {
        maxAge: 30 * 24 * 60 * 60 // 30 days
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      setUser(user[0])

      Router.push('/dashboard')
    } catch (error) {
      if (error?.response?.data) {
        throw new Error(error.response.data.error)
      }

      throw new Error('An error has occurred')
    }
  }

  async function refetch() {
    const { data } = await api.get('/auth/authenticate')

    setUser(data)
  }

  async function singOut() {
    destroyCookie(undefined, '@siape:token')

    api.defaults.headers['Authorization'] = null

    setUser(null)

    Router.push('/')
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signUp, refetch, singOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}
