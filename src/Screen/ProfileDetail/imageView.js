import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { verticalScale } from '../../Metrics';

const ImageView = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params;
    console.log(item) 
    const images = [{ url: item?.image }];



    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableOpacity
                style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back" size={34} color={'black'} />
            </TouchableOpacity>
            {!item.image ?
                (<View style={style.iconvieew}>
                    <Ionicons name="person-circle-outline" size={300} color={'black'} style={style.icon} />
                </View>
                ) :
                (<ImageViewer
                    imageUrls={images}
                    enableSwipeDown={true}
                    onSwipeDown={() => navigation.goBack()}
                    renderIndicator={() => null}
                    backgroundColor='white'
                    saveToLocalByLongPress={false}
                />)}
        </View>
    );
};
const style = StyleSheet.create({
    icon: {

    },
    iconvieew: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default ImageView;
