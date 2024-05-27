import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ImageView = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params; 
     
    const images = item && item.image ? [{ url: item.image }] : [{ url: item }];

    const isImageAvailable = item?.image || (typeof item === 'string' && item);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableOpacity
                style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back" size={34} color={'black'} />
            </TouchableOpacity>
            {isImageAvailable ? (
                <ImageViewer
                    imageUrls={images}
                    enableSwipeDown={true}
                    onSwipeDown={() => navigation.goBack()}
                    renderIndicator={() => null}
                    backgroundColor='white'
                    saveToLocalByLongPress={false}
                />
            ) : (
                <View style={styles.iconView}>
                    <Ionicons name="person-circle-outline" size={300} color={'black'} style={styles.icon} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    
    iconView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ImageView;
