import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../Metrics";

export const style = StyleSheet.create({
    main:{
        flex:1,
       
    },
    btnsignup:{
        borderWidth:1,
        marginTop:verticalScale(40),
        marginHorizontal:horizontalScale(50),
        paddingVertical:verticalScale(5),
        backgroundColor:'purple'
    },
    txtsignup:{
        textAlign:'center',
        fontSize:moderateScale(25),
        color:'white',
    },
    logintxt:{
        fontSize:moderateScale(30),
        textAlign:'center',
        color:'black',
        marginTop:verticalScale(20)
    }
})