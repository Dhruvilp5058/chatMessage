import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../Metrics";
import { colour } from "../../../assets/color/color";

export const style = StyleSheet.create({

    main: {
        flex: 1
    },
    headerview:{
        backgroundColor:colour.primary,
        flexDirection:'row',
        paddingVertical:verticalScale(8),
        alignItems:'center',
        justifyContent:'space-between'
    },
    backbtn:{
        marginLeft:horizontalScale(5),
        flexDirection:'row',
        alignItems:'center'
    },
    image:{
        height:verticalScale(50),
        width:horizontalScale(50),
        borderRadius:moderateScale(100), 
    },
    profilebtn:{
        flexDirection:'row', 
        alignItems:'center', 
        width:horizontalScale(295)
    },
    iconview:{
        height:verticalScale(50),
        width:horizontalScale(50),
        borderRadius:moderateScale(100),
        borderWidth:1,
        alignItems:'center',
        justifyContent:'flex-end',
        backgroundColor:'white',  
    },
    txtheader:{
        fontSize:moderateScale(25),
        color:colour.white,
        fontWeight:'500',
        marginLeft:horizontalScale(10)
    },
    textInput: {
        color: 'black', 
        borderRadius: moderateScale(20),
        borderWidth: 1,
        paddingLeft: horizontalScale(15), 
    },
    sendview: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    sendbtn: {
        justifyContent: 'center'

    },
    imagebtn: {
        right: horizontalScale(10)
    },
    rendersendview: {
        flexDirection: 'row',
        alignItems: 'center',
        height: verticalScale(40)
    },
    openCamera: {
        marginRight: horizontalScale(5)
    },
    audiobtn:{
        marginRight:horizontalScale(2)
    },
    threedotbtn:{
        backgroundColor:colour.primary,
        bottom:verticalScale(40), 
        marginRight:horizontalScale(10)
    },
    popupstyle:{
        top:verticalScale(42), 
        borderRadius:moderateScale(20),
    },
    refres:{
        fontSize:moderateScale(20),
        color:'black'
    },
})