import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Send} from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { style } from '../../Screen/ChatScreen/style';

const ChatMessegesend = ({toggleRecording, isRecording, openCamera,openVideoPicker, props}) => {
  return (
    <View style={style.rendersendview}>
      <TouchableOpacity onPress={toggleRecording}>
        <Ionicons
          name={isRecording ? 'stop-circle-outline' : 'play-circle'}
          size={30}
          color={'black'}
        />
      </TouchableOpacity>
      <TouchableOpacity style={style.openCamera} onPress={openCamera}>
        <Ionicons name="image" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={style.openCamera} onPress={openVideoPicker}>
        <Ionicons name="videocam" size={30} color="black" />
      </TouchableOpacity>
      <Send {...props} containerStyle={style.sendbtn}>
        <Ionicons name="send" size={30} color="black" />
      </Send>
    </View>
  );
};

export default ChatMessegesend;