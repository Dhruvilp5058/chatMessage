import React, { useState } from 'react';
import { Image, Pressable, Text, View, StyleSheet, Modal, Alert } from 'react-native';
import { style } from '../../Screen/ChatScreen/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import AgoraUIKit from 'agora-rn-uikit';
import { horizontalScale } from '../../Metrics';

const ChatHeader = ({ navigation, item, onRefresh, isLoading ,chatId ,route,selectWallpaper}) => {
  const [videoCall, setVideoCall] = useState(false); 
  const connectionData = {
    appId: 'fb8e153b554e4ce1be225f68bf440849',
    channel: 'test',
    token: null,
  };

  const handleVideoCall = () => {
    if (chatId === route.params.id + item.userID) {
      setVideoCall(!videoCall);
    } else {
      Alert.alert('Chat ID is not valid for video call');
    }
  };

  const callbacks = {
    EndCall: handleVideoCall,
  };

  return (
    <View style={style.headerview}>
      <Pressable onPress={() => navigation.goBack()} style={style.backbtn}>
        <Ionicons name="arrow-back" size={34} />
      </Pressable>
      <Pressable style={style.profilebtn} onPress={() => navigation.navigate('profileDetail', { item })}>
        {item?.image ? (
          <Image style={style.image} source={{ uri: item?.image }} />
        ) : (
          <View style={style.iconview}>
            <Ionicons name="person" size={38} color={'black'} />
          </View>
        )}
        <Text style={style.txtheader}>{item?.name}</Text>
      </Pressable>
      <Pressable style={style.videocallbtn} onPress={handleVideoCall}>
        <Ionicons name='videocam-outline' size={33} color='white' />
      </Pressable>
      <Menu>
        <MenuTrigger customStyles={{ triggerWrapper: style.threedotbtn, triggerOuterWrapper: style.popupstyle }}>
          <Entypo name={'dots-three-vertical'} size={26} color={'white'} />
        </MenuTrigger>
        <MenuOptions customStyles={{ optionsWrapper: { marginVertical: 20 } }}>
          <MenuOption onSelect={onRefresh}>
            <Text style={style.refres}>{isLoading ? 'Loading...' : 'Refresh'}</Text>
          </MenuOption>
          <MenuOption onSelect={selectWallpaper}>
            <Text style={style.refres}>select wallpaper</Text>
          </MenuOption>
          <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
        </MenuOptions>
      </Menu>
      {videoCall && (
        <Modal
          animationType="fade"
          transparent={false}
          visible={videoCall}
          onRequestClose={handleVideoCall}
        >
          <AgoraUIKit connectionData={connectionData} rtcCallbacks={callbacks} />
        </Modal>
      )}
    </View>
  );
};

export default ChatHeader;
