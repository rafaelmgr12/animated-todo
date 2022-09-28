import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppContainer from './src/components/app-container'
import MainScreen from './src/main'

export default function App() {
  return (
    <AppContainer>
      <MainScreen />
    </AppContainer>
  )
}
