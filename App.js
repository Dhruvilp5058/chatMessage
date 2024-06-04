import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import * as Screens from './src/index'
import { persistor, store } from './src/Redux/store/store'
import { colour } from './assets/color/color'
import { MenuProvider } from 'react-native-popup-menu';
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {

  return (
    <MenuProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <NavigationContainer>
            <Stack.Navigator initialRouteName='splash' screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
              <Stack.Screen component={Screens.SplashScreen} name='splash' />
              <Stack.Screen component={Screens.Signup} name='signup' />
              <Stack.Screen component={Screens.LoginScreen} name='login' />
              <Stack.Screen component={TabNavigator} name='hometab' />
              <Stack.Screen component={Screens.ChatScreen} name='chatscreen' />
              <Stack.Screen component={Screens.Profile} name='profile' />
              <Stack.Screen component={Screens.VideoScreen} name='video' />
              <Stack.Screen component={Screens.ProfileDetail} name='profileDetail' />
              <Stack.Screen component={Screens.ImageView} name='imageview' />
              <Stack.Screen component={Screens.Pdfview} name='pdf' />
              <Stack.Screen component={Screens.Videocall} name='videocall' />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </MenuProvider>
  )
}
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"

      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen component={Screens.HomeScreen} name='home'
        options={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
          tabBarInactiveBackgroundColor: colour.primary,
          tabBarActiveBackgroundColor: colour.primary,
          tabBarLabel: 'Home',

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
      <Tab.Screen component={Screens.SettingScreen} name='setting'
        options={{
          tabBarLabel: 'Setting',
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
          tabBarInactiveBackgroundColor: colour.primary,
          tabBarActiveBackgroundColor: colour.primary,
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={26} />
          ),
        }} />
      <Tab.Screen component={Screens.Learning} name='learn'
        options={{
          tabBarLabel: 'learning',
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
          tabBarInactiveBackgroundColor: colour.primary,
          tabBarActiveBackgroundColor: colour.primary,
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  )
}
export default App