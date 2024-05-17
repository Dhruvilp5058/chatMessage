import { View, Text, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ImagePicker from 'react-native-image-crop-picker'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'  

const Profile = () => {
  const reduxData = useSelector(state => state.counter.value)
  const id = reduxData?.userID
  const [userData, setUserData] = useState(null)
  const [image, setImage] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userDoc = await firestore()
          .collection('users')
          .doc(id)
          .get()

        if (userDoc.exists) {
          console.log(userDoc.data().image)  
          setUserData(userDoc.data().image)
        } else {
          console.log('User not found')
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    if (id) {
      getUserData()
    }
  }, [id])

  const profileImage = () => {
    ImagePicker.openPicker({
      cropping: true
    }).then(image => {
      setImage(image);
      uploadImage(image);
    });
  }

  const uploadImage = async (imageData) => {
    const reference = storage().ref(imageData.path);
    await reference.putFile(imageData.path);
    const url = await storage().ref(imageData.path).getDownloadURL(); 
    setImageUrl(url); 
    await firestore().collection('users').doc(id).update({
      image: url  
    }) 
    .then(() => {
      console.log("Image uploaded successfully!");
    })
    .catch(error => {
      console.error("Error uploading image: ", error);
    });
  };

  return (
    <View>
      <Text>Profile</Text>
      {userData && <Text>User Name: {userData.name}</Text>}
      <Image source={{ uri: imageUrl || userData}} style={{height:100,width:100}} />
      <Button title='Choose Image' onPress={profileImage} />
    </View>
  )
}

export default Profile
