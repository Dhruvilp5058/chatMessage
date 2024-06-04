import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import TextinputSignup from '../../component/Textinput/textinput';
import { loginAutharrey } from '../../Redux/Slice/slice';
import { style } from './style';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState('')
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {  
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      }
      return false; // Allow normal back navigation for other screens
    };
  
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
  
    return () => backHandler.remove();
  }, [navigation]);
  
  const loginUser = () => {
    firestore()
      .collection('users')
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        if (querySnapshot.empty) { 
          seterror('Email not found. Please sign up.');
        } else { 
          const userData = querySnapshot.docs[0].data();
          const { name, email, userID } = userData;
          reduxStore(name, email, userID);
        }
      })
      .catch(error => {
        console.error('Error fetching user:', error);
        alert('An error occurred. Please try again later.');
      });
  };

  const reduxStore = (name, email, userID) => {
    const data = { name, email, userID };
    dispatch(loginAutharrey(data));
    navigation.navigate('hometab');
  };

  return (
    <View style={{ flex: 1 }}>
      <TextinputSignup
        placeholder={'Enter email'}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextinputSignup
        placeholder={'Enter password'}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={style.btnlogin} onPress={loginUser}>
        <Text style={style.txtlogin}>Log in</Text>
      </TouchableOpacity>
      <Text style={style.errormsg}>{error}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('signup')}>
        <Text style={style.signupntxt}>Or sign up</Text>
      </TouchableOpacity>

    </View>
  );
};

export default LoginScreen;
