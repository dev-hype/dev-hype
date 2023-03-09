import 'expo-dev-client'

import React from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'

export default function App() {
  const [loaded] = useFonts({})

  if (!loaded) {
    return <SplashScreen />
  }

  return <Stack />
}
