import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { ImageBackground, PermissionsAndroid } from 'react-native'
import { useSelector } from 'react-redux'
import { image } from '../../../assets/image/image'

const SplashScreen = () => {
  const navigation = useNavigation()
  const reduxData = useSelector(state => state.counter.value);
  console.log(reduxData?.email)
  useEffect(() => {
    (() => { 
      setTimeout(() => {
        if (reduxData?.email == null) {
          navigation.navigate('login')
        } else {
          navigation.navigate('hometab');
        }
      }, 1000);

    })()

  }, [])

 

  return (
    <ImageBackground resizeMode={'stretch'} style={{ flex: 1 }}
      source={image.splashscreen2}
    >


    </ImageBackground>

  )
}

export default SplashScreen