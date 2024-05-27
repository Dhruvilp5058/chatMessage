import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Bubble } from 'react-native-gifted-chat';
import Pdf from 'react-native-pdf';
import { useDispatch } from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import { colour } from '../../../assets/color/color';
import { horizontalScale, moderateScale, verticalScale } from '../../Metrics';
import { pdfview } from '../../Redux/Slice/slice';
import { style } from '../../Screen/ChatScreen/style';

const ChatBubble = ({ props, deleteMessage }) => {
    const { currentMessage } = props;
    const [pdfUri, setPdfUri] = useState(''); 
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const pdfdata = currentMessage.document;
    useEffect(() => {
        if (pdfdata) {
            fetchPdf();
        }
    }, [fetchPdf, pdfdata])
    const fetchPdf = useCallback(async () => {
        try {
            const { config, fs } = RNFetchBlob;
            const uniqueId = new Date().getTime().toString();
            const downloadPath = `${fs.dirs.DocumentDir}/temp_${uniqueId}.pdf`;
            const res = await config({
                fileCache: true,
                trusty: true,
                path: downloadPath,
            }).fetch('GET', pdfdata);
            setPdfUri(res.path());
        } catch (error) {
            console.error('Failed to fetch PDF', error);
        }  
    }, [pdfdata]);
    



    const navigateToPDF = () => {
        if (currentMessage.document) {
            dispatch(pdfview(currentMessage.document));
            navigation.navigate('pdf');
        }
    };

    if (currentMessage.document) {
        return (

            <TouchableOpacity onPress={navigateToPDF} style={style.pdfbtn}>
                <View style={pdfstyle.viewpdf}>
                    <Pdf
                        source={{ uri: pdfUri }}
                        style={pdfstyle.pdf}
                    />
                </View>
                <Text style={style.pdftext}>{currentMessage.pdfname}</Text>
            </TouchableOpacity>

        );
    }

    return (
        <Bubble
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: colour.primary,
                },
            }}
            onLongPress={() => deleteMessage(currentMessage._id)}
        />
    );
};
const pdfstyle = StyleSheet.create({
    viewpdf: {
        flex: 1,
    },
    pdf: {
        height: verticalScale(160),
        width: horizontalScale(217),
        borderRadius: moderateScale(10)
    },
    
})

export default ChatBubble;
