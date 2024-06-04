import AgoraUIKit from 'agora-rn-uikit';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { moderateScale } from '../../Metrics';


const Learning = () => {
  const [videoCall, setVideoCall] = useState(false);
  console.log('first')  
  const connectionData = {
    appId: 'fb8e153b554e4ce1be225f68bf440849',
    channel: 'test',
    token: null,
  };

  const handleVideoCall = () => {
    setVideoCall(!videoCall);
  };

  const callbacks = {
    EndCall: handleVideoCall,
  };

  if (videoCall) {
    return (
      <AgoraUIKit connectionData={connectionData} rtcCallbacks={callbacks} />
    );
  }

  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText} onPress={handleVideoCall}>
        Start Call
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'dodgerblue',
    margin: moderateScale(10),
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Learning;