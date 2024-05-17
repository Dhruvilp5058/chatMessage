import React, { useState } from 'react';
import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import { style } from '../../Screen/ChatScreen/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

const ChatHeader = ({ navigation, item, onRefresh, isLoading }) => {

  return (
    <View style={style.headerview}>
      <Pressable onPress={() => navigation.goBack()} style={style.backbtn}>
        <Ionicons name="arrow-back" size={34} />
      </Pressable>
      <Pressable style={style.profilebtn} onPress={()=>navigation.navigate('profileDetail',{item})}>
        {item?.image ? (
          <Image style={style.image} source={{ uri: item?.image }} />
        ) : (
          <View style={style.iconview}>
            <Ionicons name="person" size={38} color={'black'} />
          </View>
        )}
      <Text style={style.txtheader}>{item?.name}</Text>
      </Pressable>
      <Menu>
        <MenuTrigger customStyles={{ triggerWrapper: style.threedotbtn, triggerOuterWrapper: style.popupstyle }}>
          <Entypo name={'dots-three-vertical'} size={26} color={'white'} />
        </MenuTrigger>
        <MenuOptions customStyles={{ optionsWrapper: { marginVertical: 20 } }}>
          <MenuOption onSelect={onRefresh}>
            <Text style={style.refres}>{isLoading ? 'Loading...' : 'Refresh'}</Text>
          </MenuOption>
          <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default ChatHeader;
