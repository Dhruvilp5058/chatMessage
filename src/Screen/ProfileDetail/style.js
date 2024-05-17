import { StyleSheet } from "react-native";
import { colour } from "../../../assets/color/color";
import { horizontalScale, moderateScale, verticalScale } from "../../Metrics";

export const style = StyleSheet.create({
    main:{
        flex:1
    },
    headerview:{ 
        flexDirection:'row',
        paddingVertical:verticalScale(8),
        alignItems:'center', 
        justifyContent:'space-between',  
        height:verticalScale(156)
    },
    backbtn:{
        alignSelf:'flex-start', 

    },
    image:{
        height:verticalScale(150),
        width:horizontalScale(150),
        borderRadius:moderateScale(300)
    },
    icon:{
        bottom:verticalScale(5), 
        height:verticalScale(150)
    },
   
    txtname:{
        fontSize:moderateScale(30),
        color:'black',
        fontWeight:'500',
        textAlign:'center'
    },
    txtmobile:{
        fontSize:moderateScale(25),
        color:'black',
        fontWeight:'500',
        textAlign:'center' 
    }
     
})