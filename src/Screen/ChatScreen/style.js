import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../Metrics";
import { colour } from "../../../assets/color/color";

export const style = StyleSheet.create({

    main: {
        flex: 1
    },
    headerview: {
        backgroundColor: colour.primary,
        flexDirection: 'row',
        paddingVertical: verticalScale(8),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    backbtn: {
        marginLeft: horizontalScale(5),
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: verticalScale(50),
        width: horizontalScale(50),
        borderRadius: moderateScale(100),
    },
    profilebtn: {
        flexDirection: 'row',
        alignItems: 'center',
        width: horizontalScale(295)
    },
    iconview: {
        height: verticalScale(50),
        width: horizontalScale(50),
        borderRadius: moderateScale(100),
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'white',
    },
    txtheader: {
        fontSize: moderateScale(20),
        color: colour.white,
        fontWeight: '500',
        marginLeft: horizontalScale(10)
    },
    textInput: {
        color: 'black',
        borderRadius: moderateScale(20),
        borderWidth: 1,
        paddingLeft: horizontalScale(15),
        paddingVertical: verticalScale(15),
        alignSelf: 'center',
    },

    addbtn: {
        marginRight: horizontalScale(5)
    },
    imagebtn: {
        right: horizontalScale(10)
    },
    rendersendview: {
        flexDirection: 'row',
        alignSelf: 'center',
    },

    audiobtn: {
        marginRight: horizontalScale(2)
    },
    videocallbtn:{
        right:verticalScale(40),
    },
    threedotbtn: {
        backgroundColor: colour.primary,
        position:'absolute',
        right:horizontalScale(-5),
        bottom:verticalScale(16), 
    },
    popupstyle: {  
        borderRadius: moderateScale(20), 
        marginRight:horizontalScale(60), 
        position:'absolute',
        top:verticalScale(30),
        left:verticalScale(-10)
    },
    refres: {
        fontSize: moderateScale(20),
        color: 'black'
    },
    pdfbtn: {
        borderWidth: 0.5,
        height: verticalScale(200),
        width: horizontalScale(220),
        borderRadius: moderateScale(10), 
        alignItems:'center',
        backgroundColor:colour.primary
    },
    pdftext: {
        color: colour.white,
        fontWeight: 'bold', 
        position:'absolute',
        bottom:0,
        width:'100%',
        fontSize:moderateScale(11)
    },
})