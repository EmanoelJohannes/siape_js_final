import React from 'react'

import { AuthProvider } from '@/context/AuthContext'

function ContextProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>
}

export default ContextProvider
