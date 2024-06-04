import { View, Text, Pressable, Animated, PanResponder } from 'react-native';
import React, { useState } from 'react';  
import Ionicons from 'react-native-vector-icons/Ionicons';  
  
const Home = () => {  
    const buttonPosition = new Animated.ValueXY({ x: 0, y: 0 });  
  
    const rotation = buttonPosition.x.interpolate({  
        inputRange: [-100, 0, 100],  
        outputRange: ['-90deg', '0deg', '90deg'],  
    });  
  
    const pan = PanResponder.create({  
        onMoveShouldSetPanResponder: () => true,  
        onPanResponderMove: (e, gesture) => {  
            buttonPosition.setValue({ x: gesture.dx, y: gesture.dy });  
        },  
        onPanResponderRelease: () => {   
            Animated.spring(buttonPosition, {  
                toValue: { x: 0, y: 0 },  
                useNativeDriver: false,  
            }).start();  
        }  
    });  
  
    return (  
        <View style={{  
            flex: 1,  
            justifyContent: 'center',  
            alignItems: 'center'  
        }}>  
            <Animated.View  
                {...pan.panHandlers}  
                style={{  
                    height: 80,  
                    width: 80,  
                    backgroundColor: 'red',  
                    transform: [  
                        { translateX: buttonPosition.x },  
                        { translateY: buttonPosition.y },  
                        { rotate: rotation },  
                    ]  
                }}  
            >  
                <Pressable>  
                    <Ionicons name='play' size={90} />  
                </Pressable>  
            </Animated.View>  
        </View>  
    );  
};  
  
export default Home;  