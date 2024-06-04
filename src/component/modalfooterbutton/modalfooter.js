import React from 'react';
import { Modal, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { horizontalScale, moderateScale, verticalScale } from '../../Metrics';
const Modalfooter = ({ isVisible, onClose, toggleRecording, openCamera, openVideoPicker, isRecording ,opendocument}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}

        >
            <Pressable style={{ flex: 1, }} onPress={onClose}>
                <Pressable style={modalstyle.viewmain}>
                    <TouchableOpacity onPress={toggleRecording} style={modalstyle.recordbtn}>
                        <Ionicons
                            name={isRecording ? 'stop-circle-outline' : 'play-circle'}
                            size={50}
                            color={'black'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={modalstyle.openCamera} onPress={openCamera}>
                        <Ionicons name="image" size={50} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={modalstyle.openCamera} onPress={openVideoPicker}>
                        <Ionicons name="videocam" size={50} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={modalstyle.openCamera} onPress={opendocument} >
                        <Ionicons name="document" size={50} color="black" />
                    </TouchableOpacity>
                </Pressable>
            </Pressable>
        </Modal>
    )
}
const modalstyle = StyleSheet.create({
    viewmain: {
        backgroundColor: 'white',
        flexDirection: 'row',
        position: 'absolute',
        bottom: verticalScale(54),
        width: '80%',
        marginLeft: horizontalScale(26),
        height: verticalScale(90),
        borderRadius:moderateScale(10),
        alignItems:'center',
        justifyContent:'space-between',
        borderColor:'grey',
        borderWidth:0.5

    },
    openCamera: {
        marginRight: horizontalScale(5)
    },
    recordbtn: {

    }
})
export default Modalfooter