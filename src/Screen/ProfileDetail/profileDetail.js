import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { style } from './style';

const ProfileDetail = () => {
  const route = useRoute()
  const {item}=route.params
  console.log(route.params)
  const navigation = useNavigation()
  return (
    <View style={style.main}>
      <View style={style.headerview}>
    <Pressable onPress={() => navigation.goBack()} style={style.backbtn}>
      <Ionicons name="arrow-back" size={34} color={'black'} />
    </Pressable> 
    <Pressable onPress={()=>navigation.navigate('imageview',{item})}>
    {item?.image ? (
        <Image style={style.image} source={{ uri: item?.image }} />
      ) : (
        <View  >
          <Ionicons name="person-circle-outline" size={160} color={'black'} style={style.icon} />
        </View>
      )}
      </Pressable>
      <View style={{backgroundColor:'red'}} >
        <Text>hello</Text>
      </View>
    </View>
      <Text style={style.txtname}>{item.name}</Text>
      <Text style={style.txtmobile}>{item.mobile}</Text>
    </View>
  )
}

export default ProfileDetail