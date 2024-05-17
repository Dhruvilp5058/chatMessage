import React from 'react'
import { Image, View } from 'react-native'

const ChatImage = ({props}) => {
    console.log(props)
  return (
    <View>
        <Image
        style={{height:200,width:200}}
        // source={{uri:props.currentMessage.image}}
        />
    </View>
  )
}

export default ChatImage