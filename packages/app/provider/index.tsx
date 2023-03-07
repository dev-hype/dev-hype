import { TamaguiProvider, TamaguiProviderProps } from '@dev-hype/ui'
import { useColorScheme } from 'react-native'

import AuthProvider from './auth'

import config from '../tamagui.config'

export function Provider({
  children,
  pageProps,
  ...rest
}: Omit<TamaguiProviderProps, 'config'> & { pageProps: any }) {
  const scheme = useColorScheme()

  return (
    <AuthProvider {...pageProps}>
      <TamaguiProvider
        config={config}
        disableInjectCSS
        defaultTheme={scheme === 'dark' ? 'dark' : 'light'}
        {...rest}
      >
        {children}
      </TamaguiProvider>
    </AuthProvider>
  )
}
