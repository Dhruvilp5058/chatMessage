import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, BackHandler, FlatList, Image, PermissionsAndroid, Pressable, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { style } from './style'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { profileavatar } from '../../Redux/Slice/slice'
const HomeScreen = () => {
  const navigation = useNavigation()
  const [user, setUser] = useState([])
  const dispatch = useDispatch()
  const reduxData = useSelector(state => state.counter.value)
  const id = reduxData?.userID
  const [loading, setLoading] = useState(true)
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
  const recordpermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('record permission granted');
    } else {
      console.log('permission denied');
    }
  }
  const requestPermissions = async () => {
    const recordPermission = await request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO);
    const writeExternalPermission = await request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    const readExternalPermission = await request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
  
    if (recordPermission === 'granted' && writeExternalPermission === 'granted' && readExternalPermission === 'granted') {
      console.log('All permissions granted');
    } else {
      console.log('Some permissions denied');
    }
  };
  
  useEffect(() => {
     recordpermission()
    setTimeout(() => {
      setLoading(false)
    }, 1000);
    getUsers()
  }, [reduxData?.email])
  const getUsers = async () => {
    const querySnapshot = await firestore()
      .collection('users')
      .where('email', '!=', reduxData?.email)
      .get()

    const tempData = querySnapshot?.docs?.map(doc => doc.data())
    setUser(tempData)
    setLoading(false);

  }
  const refresh = () => {
    setLoading(true);
    getUsers();
  }
  const navigateChat = (item) => { 
    dispatch(profileavatar(item))
    navigation.push('chatscreen', { item: item, id: id })
  }

  return (
    <View style={style.main}>
      <View style={style.headerview}>
        <Text style={style.txtheader}>home</Text>
        <Menu>
          <MenuTrigger customStyles={{ triggerWrapper: style.threedotbtn, triggerOuterWrapper: style.popupstyle }}>
            <Entypo name={'dots-three-vertical'} size={26} color={'white'} />
          </MenuTrigger>
          <MenuOptions customStyles={{ optionsWrapper: { marginVertical: 20 } }}>
            <MenuOption onSelect={() => refresh()} >
              <Text style={style.refres}>Refresh</Text>
            </MenuOption>
            <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
          </MenuOptions>
        </Menu>
      </View>
      {loading ? (
        <View style={style.loaderview}>
          <ActivityIndicator size={'large'} color={'purple'} />
        </View>
      ) : (<FlatList
        data={user}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => navigateChat(item)}>
            <View style={style.user}>
              <View style={style.imgview}>
                {item?.image ? (
                  <Image
                    style={style.image}
                    source={{ uri: item?.image }}
                  />
                ) : (
                  <Ionicons name='person-circle-outline' size={75} color={'black'} style={style.iconprofile} />)}
              </View>
              <Text style={style.nametxt}>{item?.name}</Text>
            </View>
          </Pressable>
        )}
      />)}
    </View>
  )
}

export default HomeScreen