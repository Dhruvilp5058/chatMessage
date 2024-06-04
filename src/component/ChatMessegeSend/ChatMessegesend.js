import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Send } from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { style } from '../../Screen/ChatScreen/style';
import Modalfooter from '../modalfooterbutton/modalfooter';

const ChatMessegesend = ({ toggleRecording,
  isRecording,
  openCamera,
  openVideoPicker,
  props,
  isModalVisible,
  closeModal,
  openModal,
  opendocument }) => {

  return (

    <View style={style.rendersendview}>
      <TouchableOpacity onPress={openModal} style={style.addbtn} >
        <AntDesign name={'pluscircleo'} size={40} color={'black'} />
      </TouchableOpacity>
      <Modalfooter
        isVisible={isModalVisible}
        onClose={closeModal}
        openCamera={openCamera}
        openVideoPicker={openVideoPicker}
        toggleRecording={toggleRecording}
        isRecording={isRecording}
        opendocument={opendocument}

      />
      <Send {...props} >
        <Ionicons name="send" size={40} color="black" />
      </Send>
    </View>

  );
};

export default ChatMessegesend;
{/* <TouchableOpacity onPress={toggleRecording}>
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
      </TouchableOpacity> */}