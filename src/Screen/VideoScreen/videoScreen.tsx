import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import Video from 'react-native-video'  
  
const VideoScreen = () => {  
    const route = useRoute()  
    const { videoUri } = route.params;   
  
  return (  
    <View style={styles.container}>  
    <Video  
      source={{ uri: videoUri }}  
      style={styles.video}  
      controls={true}    
        
    />  
  </View>  
  )  
}  
const styles = StyleSheet.create({  
    container: {  
      flex: 1,  
      backgroundColor: '#000',  
      justifyContent: 'center',  
      alignItems: 'center',  
    },  
    video: {  
      flex: 1,  
      width: '100%',  
    },  
  });  
export default VideoScreen  