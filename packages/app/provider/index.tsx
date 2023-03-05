import config from '../tamagui.config'
import { TamaguiProvider, TamaguiProviderProps } from '@dev-hype/ui'
import { useColorScheme } from 'react-native'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme()
  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS
      defaultTheme={scheme === 'dark' ? 'dark' : 'light'}
      {...rest}
    >
      {children}
    </TamaguiProvider>
  )
}
