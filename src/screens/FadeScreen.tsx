import React from 'react'
import { View, Button, Animated } from 'react-native'
import useFade from '../Hooks/useFade'


const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade();
    
    return (
        <View style={{
            flex: 1, 
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
            }} >
            <Animated.View style={{
                backgroundColor: '#084F6A',
                width: 150,
                height: 150,
                borderColor: '#fff',
                borderWidth: 10,
                opacity: opacity,
            }} />

            <Button  
                title='FadeIn'
                onPress={ () => fadeIn() }
            />

            <Button  
                title='FadeOut'
                onPress={ () => fadeOut() }
            />

        </View>
    )
}

export default FadeScreen;
