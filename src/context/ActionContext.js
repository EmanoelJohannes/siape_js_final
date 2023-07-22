import { useEffect } from 'react'
import { createContext } from 'react'
import { parseCookies, setCookie } from 'nookies'

export const ActionContext = createContext()

export function ActionProvider({ children }) {

  useEffect(() => {
    const { '@siape:action': action } = parseCookies()

    async function fetchAction() {
      setCookie(undefined, '@siape:action', "projetos")
    }

    if (!action) {
      fetchAction()
    }
  }, [])

  return (
    <ActionContext.Provider value={{}}>
      {children}
    </ActionContext.Provider>
  )
}
