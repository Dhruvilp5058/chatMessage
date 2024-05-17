import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import uuid from 'react-native-uuid'
import { useDispatch } from 'react-redux'
import TextinputSignup from '../../component/Textinput/textinput'
import { signupauth } from '../../Redux/Slice/slice'
import { style } from './style'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEMail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setconfirmPassword] = useState('')
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const data = { name, email, password }



  const registerUser = async () => {
    const userID = uuid.v4()
    const userRef = firestore().collection('users');
    const emailExists = await userRef.where('email', '==', email).get();
    if (!emailExists.empty) { 
      Alert.alert('Email already exists');
      return;
    }
    firestore().collection('users').doc(userID).set({
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      userID: userID

    }).then(res => {
      console.log('user created')
      dispatch(signupauth(data))
      navigation.navigate('login')
    }).catch(e => {
      console.log(e)
    })
  }
  const validate = () => {
    let isValid = true
    if (name == '') {
      isValid = false
    }
    if (email == '') {
      isValid = false
    }
    if (mobile == '') {
      isValid = false
    }
    if (password == '') {
      isValid = false
    }
    if (confirmpassword == '') {
      isValid = false
    }
    if (confirmpassword !== password) {
      isValid = false
    }
    return isValid
  }
  return (
    <View style={style.main}>
      <TextinputSignup
        placeholder={'enter name'}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextinputSignup
        placeholder={'enter email'}
        value={email}
        onChangeText={(text) => setEMail(text)} />

      <TextinputSignup
        placeholder={'enter mobile'}
        value={mobile}
        onChangeText={(text) => setMobile(text)} />

      <TextinputSignup
        placeholder={'enter password'}
        value={password}
        onChangeText={(text) => setPassword(text)} />

      <TextinputSignup
        placeholder={'enter confirm password'}
        value={confirmpassword}
        onChangeText={(text) => setconfirmPassword(text)} />

      <TouchableOpacity style={style.btnsignup} onPress={() => {
        if (validate()) {
          registerUser()
        } else {
          Alert.alert('PLEASE ENTER correct data')
        }
      }} >
        <Text style={style.txtsignup}>sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text style={style.logintxt}>or Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Signup