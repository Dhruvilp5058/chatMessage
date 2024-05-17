import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatAudio = ({ props }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null); 
  useEffect(() => {
    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, []);

  const handleAudioPlayback = async () => {
    try {
      if (isPlaying) {
        sound.pause();
        setIsPlaying(false);
      } else {
        const newSound = new Sound(props.currentMessage.audio, '', (error) => {
          if (error) {
            console.error('Failed to load sound', error);
            return;
          }
          setIsPlaying(true);
          newSound.play((success) => {
            if (success) {
              console.log('Successfully finished playing');
            } else {
              console.log('Playback failed due to audio decoding errors');
            }
            setIsPlaying(false);
          });
        });
        setSound(newSound);
      }
    } catch (error) {
      console.error('Error handling audio playback:', error);
    }
  };

  return (
    <TouchableOpacity onPress={handleAudioPlayback}>
      <Ionicons name={isPlaying ? 'stop-circle-outline' : 'play-circle'} size={30} color={'black'} />
    </TouchableOpacity>
  );
};
export default ChatAudio