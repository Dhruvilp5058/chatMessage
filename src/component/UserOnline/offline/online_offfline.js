import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const updateUserPresence = () => {
  const userId = auth().currentUser.uid;
  const userStatusDatabaseRef = database().ref(`/presence/${userId}`);

  const isOfflineForDatabase = {
    state: 'offline',
    last_changed: database.ServerValue.TIMESTAMP,
  };

  const isOnlineForDatabase = {
    state: 'online',
    last_changed: database.ServerValue.TIMESTAMP,
  };

  database().ref('.info/connected').on('value', (snapshot) => {
    if (snapshot.val() === false) {
      return;
    }

    userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(() => {
      userStatusDatabaseRef.set(isOnlineForDatabase);
    });
  });
};

useEffect(() => {
  updateUserPresence();
}, []);
