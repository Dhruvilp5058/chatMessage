import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Pressable } from 'react-native';
import Video from 'react-native-video';
import { horizontalScale, moderateScale, verticalScale } from '../../Metrics';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const ChatVideo = ({ props }) => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const navigation = useNavigation()

  const togglePlayPause = () => {
    setPaused(!paused);
  };

  const resetVideo = () => {
    if (videoRef.current) {
      setPaused(true);
      videoRef.current.seek(0);
    }
  };

  const onBuffer = (buffer) => {
    setLoading(buffer.isBuffering);
  };

  const videoError = (error) => {
    console.log('Video error:', error);
  };

  const onProgress = (data) => {
    setCurrentTime(data.currentTime);
    setDuration(data.seekableDuration);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('video', { videoUri: props.currentMessage.video })}>
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: props.currentMessage.video }}
            ref={videoRef}
            paused={paused}
            onBuffer={onBuffer}
            onError={videoError}
            style={styles.video}
            onLoad={() => setLoading(false)}
            onProgress={onProgress}
          />
          <View style={styles.timer}>
            <Text style={styles.texttime}>{currentTime.toFixed(0)} / {duration.toFixed(0)}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={togglePlayPause}>
            <Ionicons name={paused ? 'play-circle-outline' : 'stop-circle-outline'} size={33} color={'#ffffff'} />
          </TouchableOpacity>
          {loading ? (
            <View style={styles.button}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          ) : (
            <TouchableOpacity style={styles.button} onPress={resetVideo}>
              <MaterialCommunityIcons name={'restart'} size={33} color={'#ffffff'} />
            </TouchableOpacity>
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:horizontalScale(200)
  },
 
  video: {
    height: verticalScale(270),
    width:'100%',
    borderRadius: moderateScale(20),
    resizeMode:'cover',
    alignSelf:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: horizontalScale(50),
    height: verticalScale(40),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: horizontalScale(10),
  },
  timer: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(10),
    left: horizontalScale(10),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
  },
  texttime: {
    color: 'white',
    fontSize: moderateScale(16),
  },
});

export default ChatVideo;
