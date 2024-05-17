import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, Image, View } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import ImagePicker from 'react-native-image-crop-picker';
import { colour } from '../../../assets/color/color';
import Avatar from '../../component/Avatar/avatar';
import ChatAudio from '../../component/ChatAudio/chatAudio';
import ChatMessegesend from '../../component/ChatMessegeSend/ChatMessegesend';
import ChatHeader from '../../component/chatScreenHeader/ChatHeader';
import ChatVideo from '../../component/ChatVideo/ChatVideo';
import { style } from './style';
import ChatImage from '../../component/ChatImage/chatImage';
const audioRecorderPlayer = new AudioRecorderPlayer();
const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const route = useRoute();
  const navigation = useNavigation();
  const [isRecording, setIsRecording] = useState(false);
  const { item } = route.params;
  const userId = route.params.id;
 
  const user = {
    _id: userId,
  };

  useEffect(() => {
    const querySnapShot = firestore()
      .collection('chats')
      .doc('' + route.params.id + item.userID)
      .collection('messages')
      .orderBy('createdAt', 'desc');

    const messegedone = () => {
      querySnapShot.onSnapshot(snapShot => {
        const allMessages = snapShot.docs.map(snap => {
          return { ...snap.data(), createdAt: new Date() };
        });
        setMessages(allMessages);
      });
    } 
    messegedone()
  }, []);

  const onSend = messageArray => {
    let myMsg = null;
 
      const msg = messageArray[0];
      myMsg = {
        ...msg,
        _id: Math.random().toString(),
        senderId: route.params.id,
        receiverId: item.userID,  
        user: user,

      };
   
 
    
    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
    firestore()
      .collection('chats')
      .doc('' + route.params.id + item.userID)
      .collection('messages')
      .add({
        ...myMsg,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

    firestore()
      .collection('chats')
      .doc('' + item.userID + route.params.id)
      .collection('messages')
      .add({
        ...myMsg,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
    setImageUrl('')

  };

  const openCamera = async () => {
    ImagePicker.openPicker({
      cropping: true
    }).then(image => {
      uploadImage(image);
    });
  };
  const uploadImage = async (imageData) => {
    const reference = storage().ref(imageData.path);
    await reference.putFile(imageData.path);
    const url = await storage().ref(imageData.path).getDownloadURL();
    console.log('url', url);
    onSend([{ image: url }]);
    setImageUrl(url);

  };

  const toggleRecording = async () => {
    try {
      const cacheDir = RNFS.CachesDirectoryPath;
      const path = Platform.select({
        ios: `${cacheDir}/audio.m4a`,
        android: `${cacheDir}/audio.mp3`,
      });

      if (!isRecording) { 
        await audioRecorderPlayer.startRecorder(path);
        console.log('Recording started');
        setIsRecording(true);
      } else { 
        const result = await audioRecorderPlayer.stopRecorder();
        console.log('Recording stopped:', result);
        setIsRecording(false);

        uploadAudio(path);
      }
    } catch (error) {
      console.error('Error toggling recording:', error);
    }
  };

  const uploadAudio = async (audioPath) => {
    try {
      const reference = storage().ref().child(`audio/${Math.random().toString(36).substring(7)}`);
      await reference.putFile(audioPath);
      const url = await reference.getDownloadURL();
      console.log('Audio uploaded:', url);
      onSend([{ audio: url }]);
    } catch (error) {
      console.error('Error uploading audio:', error);
    }
  };

  const deleteMessage = async (messageId) => {
    try {
      Alert.alert(
        'Delete Message',
        'Are you sure you want to delete this message?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: async () => {
              const querySnapshot = await firestore()
                .collection('chats')
                .doc('' + route.params.id + item.userID)
                .collection('messages')
                .where('_id', '==', messageId)
                .get();

              if (querySnapshot.empty) {
                console.log('No matching message found in Firestore');
                return;
              }

              querySnapshot.forEach(doc => {
                console.log('Deleting message from Firestore with ID:', doc.id);
                doc.ref.delete();
              });

              const querySnapshot2 = await firestore()
                .collection('chats')
                .doc('' + item.userID + route.params.id)
                .collection('messages')
                .where('_id', '==', messageId)
                .get();
              if (querySnapshot2.empty) {
                console.log('No matching message found in Firestore');
                return;
              }

              querySnapshot2.forEach(doc => {
                console.log('Deleting message from Firestore with ID:', doc.id);
                doc.ref.delete();
              });

              setMessages(prevMessages => prevMessages.filter(message => message._id !== messageId));
            },
          },
        ],
        { cancelable: true }
      );
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };
  const [videoUrl, setVideoUrl] = useState('');
  const openVideoPicker = async () => {
    try {
      const video = await ImagePicker.openPicker({
        mediaType: 'video',
      });
      uploadVideo(video);
    } catch (error) {
      console.error('Error picking video:', error);
    }
  };
  const uploadVideo = async (videoData) => {
    try {
      const reference = storage().ref(videoData.path);
      await reference.putFile(videoData.path);
      const url = await storage().ref(videoData.path).getDownloadURL();
      console.log('Video uploaded:', url);
      setVideoUrl(url);
      onSend([{ video: url }]);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ChatHeader {...{ navigation, item }} />
      <GiftedChat
        alwaysShowSend
        renderChatFooter={props => {
          return (
            <>
              {imageUrl !== '' ? (
                <View
                  style={{
                    flex: 1
                  }}>
                  <Image
                    source={{ uri: imageUrl }}
                    style={{ width: 400, height: 300, alignSelf: 'center', objectFit: 'cover' }}
                  />

                </View>
              ) : null}
            </>
          )
        }}

        renderSend={props => {

          return (<ChatMessegesend
            {...{
              toggleRecording,
              isRecording,
              openCamera,
              openVideoPicker,
              props,
            }}
          />
          );
        }}
        renderMessageAudio={(props) => <ChatAudio {...{ props }} />}
        messages={messages}
        renderMessageVideo={(props) => { 
          return (
            <ChatVideo {...{ props }} />
          )
        }}
        renderMessageImage={(props)=>{
          return(
            <ChatImage  {...(props)}/>
          )
        }}
        textInputStyle={style.textInput}
        onSend={messages => onSend(messages)}
        user={user}
        renderAvatar={props => 
        <Avatar {...props} />}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: colour.primary,
                },
              }}
              onLongPress={() => deleteMessage(props.currentMessage._id)}
            />
          );
        }}
      />
    </View>
  );
};

export default ChatScreen;                              
