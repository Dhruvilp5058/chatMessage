import React from 'react';
import { Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { horizontalScale, moderateScale, verticalScale } from '../../Metrics';
import { useSelector } from 'react-redux';
 
const Avatar = (props) => {
    const data = useSelector(state=>state.counter.profile)  
    if (data?.image) { 
        return (
            <Image
                source={{ uri: data.image }}
                style={{
                    width: horizontalScale(40),
                    height: verticalScale(40),
                    borderRadius: moderateScale(80),
                    bottom: verticalScale(5)
                }}
            />
        );
    } else { 
        return (
            <Ionicons name="person-circle-outline" size={40} color="gray" style={{ bottom: verticalScale(5) }} />
        );
    }
};

Avatar.defaultProps = {
    user: {
        Avatar: '',
    },
};

export default Avatar;
