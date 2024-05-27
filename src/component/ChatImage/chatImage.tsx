import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Pressable, View } from 'react-native'

const ChatImage = ({props}) => {
  const { currentMessage } = props; 
  const image = currentMessage.image 
  const navigation = useNavigation()
  return (
    <View> 
      <Pressable onPress={()=>navigation.navigate('imageview',{item:image})}>
        <Image
        style={{height:200,width:200}}
        source={{uri: currentMessage.image}}
        />
        </Pressable>
    </View>
  )
}

export default ChatImage