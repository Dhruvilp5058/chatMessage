import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions, ActivityIndicator } from 'react-native';
import Pdf from 'react-native-pdf';
import { useSelector } from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';

const PdfViewer = () => { 
    const [pdfUri, setPdfUri] = useState('');
    
    const [loading, setLoading] = useState(true);
    const pdfdata = useSelector(state => state?.counter?.pdf) 
    useEffect(() => {
        const fetchPdf = async () => {
            try {
                const { config, fs } = RNFetchBlob;
                const downloadPath = `${fs.dirs.DocumentDir}/temp.pdf`;
                const res = await config({
                    fileCache: true,
                    trusty: true,
                    path: downloadPath,
                }).fetch('GET', pdfdata);

                setPdfUri(res.path());
            } catch (error) {
                console.error('Failed to fetch PDF', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPdf();
    }, [pdfdata]);


    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container2}>
            <Pdf
                source={{ uri: pdfUri }} 
                onError={(error) => {
                    console.log(error);
                }}
                style={styles.pdf} />
        </View>
    );
};

const Pdfview = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'PDF Viewer',
        });
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <PdfViewer />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Pdfview;
