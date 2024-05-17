import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../Metrics";
import { colour } from "../../../assets/color/color";

export const style= StyleSheet.create({
    main:{
        flex:1
    },
    user:{
        elevation:1,  
        backgroundColor:'white', 
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        paddingVertical:verticalScale(5)
    },
    image:{
        height:verticalScale(80),
        width:horizontalScale(75), 
        // aspectRatio:1,
        borderRadius:moderateScale(150)

    },  
    iconprofile:{
    },
    nametxt:{
        color:'black',
        fontSize:moderateScale(22),
        marginLeft:horizontalScale(10)
    },
    
    
    loaderview:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    headerview:{
        backgroundColor:colour.primary,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:horizontalScale(10)
    },
    txtheader:{
        fontSize:moderateScale(25),
        color:colour.white,
        fontWeight:'700',
        padding:moderateScale(8)
    },
    threedotbtn:{
        backgroundColor:colour.primary,
        bottom:verticalScale(36)
    },
    popupstyle:{  
        top:verticalScale(48), 
        borderRadius:moderateScale(20), 
    },
    imgview:{
        borderWidth:1,
        height:verticalScale(80),
        width:horizontalScale(75),
        borderRadius:moderateScale(150),
        alignItems:'center',
        justifyContent:'center'
        
    },
    refres:{
        fontSize:moderateScale(20),
        color:'black'
    }
})
 