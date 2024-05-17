import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../Metrics";

export const style = StyleSheet.create({
    main: {
        flex: 1
    },
    btnlogin: {
        borderWidth: 1,
        marginTop: verticalScale(40),
        marginHorizontal: horizontalScale(50),
        paddingVertical: verticalScale(5),
        backgroundColor: 'purple'
    },
    txtlogin: {
        textAlign: 'center',
        fontSize: moderateScale(25),
        color: 'white',
    },
    signupntxt: {
        fontSize: moderateScale(30),
        textAlign: 'center',
        color: 'black',
        marginTop: verticalScale(20)
    },
    errormsg:{
        color:'red',
        textAlign:'center',
        marginTop:verticalScale(10),
        fontSize:moderateScale(18)
    }
})