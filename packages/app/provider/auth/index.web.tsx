import React, { ReactNode } from 'react'
import { ClerkProvider } from '@clerk/nextjs'

const AuthProvider: React.FC<{ children: ReactNode; pageProps: any }> = ({
  children,
  pageProps,
}) => {
  return <ClerkProvider {...pageProps}>{children}</ClerkProvider>
}

export default AuthProvider
