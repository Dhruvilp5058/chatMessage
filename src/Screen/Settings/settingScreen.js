import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginAutharrey } from '../../Redux/Slice/slice';

const SettingScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const logout = () => {
    Alert.alert('Hold on!', 'Are you sure you want toLog Out?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'YES', onPress: removeData },
    ]);

  }
  const removeData = () => {
    dispatch(loginAutharrey(null))

    navigation.navigate('login')


  }
  return (
    <View>
      <Button title='profile'onPress={()=>navigation.navigate('profile')}/>
      <Button title='logout' onPress={() => logout()} />
    </View>
  );
};

export default SettingScreen;