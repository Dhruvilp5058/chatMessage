import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { horizontalScale, verticalScale } from '../../Metrics';
const TextinputSignup = ({placeholder,onChangeText,value,props}) => {
    return (
        <>
            <TextInput
                value={value}
                style={style.txtinput}
                placeholder={placeholder}
                onChangeText={onChangeText}
                placeholderTextColor={'black'} 
                {...props}
            />
        </>
    )
}
const style = StyleSheet.create({
    txtinput: {
        borderWidth: 1,
        marginHorizontal: horizontalScale(20),
        marginTop: verticalScale(15),
        color:'black'
    }
})

export default TextinputSignup
