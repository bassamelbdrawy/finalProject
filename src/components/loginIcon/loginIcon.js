import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image,StyleSheet} from 'react-native';
import {styles} from './loginIconStyle';


function LoginIcon({text, outerContainerStyle, innerContainerStyle,onClick=()=>{}}){
    return(
        <TouchableOpacity style={[styles.container, outerContainerStyle]} onPress={onClick()}>
            <Text style={styles.moreName}> {text} </Text>
            <View style={[styles.moreImage, innerContainerStyle]}>
                <Image style={styles.arrowStyle} source={require('../../assets/photos/Path11.png')} />
            </View>
        </TouchableOpacity>
    )

}
  export default LoginIcon;