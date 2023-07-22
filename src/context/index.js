import React from 'react'

import { AuthProvider } from '@/context/AuthContext'
import { ActionProvider } from '@/context/ActionContext'

function ContextProvider({ children }) {
  return (
    <AuthProvider>
      <ActionProvider>{children}</ActionProvider>
    </AuthProvider>
  )
}

export default ContextProvider
