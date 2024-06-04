import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../home/Home'
const Stack = createNativeStackNavigator()
const Rootnavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen component={Home} name='home' />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Rootnavigator