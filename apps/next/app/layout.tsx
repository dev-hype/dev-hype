import React, { ReactNode } from 'react'
import { ClerkProvider } from '@clerk/nextjs/app-beta'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>Dev Hype</title>
        </head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
