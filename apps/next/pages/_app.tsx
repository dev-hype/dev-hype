import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'
import 'raf/polyfill'

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import Head from 'next/head'
import React, { startTransition } from 'react'
import type { SolitoAppProps } from 'solito'

import { Provider } from 'app/provider'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Tamagui Example App</title>
        <meta name="description" content="Tamagui, Solito, Expo & Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RootProvider pageProps={pageProps}>
        <Component {...pageProps} />
      </RootProvider>
    </>
  )
}

function RootProvider({
  children,
  pageProps,
}: {
  children: React.ReactNode
  pageProps: SolitoAppProps['pageProps']
}) {
  const [theme, setTheme] = useRootTheme()

  return (
    <NextThemeProvider
      onChangeTheme={(next) => {
        startTransition(() => {
          setTheme(next)
        })
      }}
    >
      <Provider disableRootThemeClass defaultTheme={theme} pageProps={pageProps}>
        {children}
      </Provider>
    </NextThemeProvider>
  )
}

export default MyApp
