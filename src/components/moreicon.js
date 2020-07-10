import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image,StyleSheet} from 'react-native';
import {scale,verticalScale,moderateScale} from '../helper/scaling';


function MoreIcon({text, outerContainerStyle, innerContainerStyle}){
    return(
        <View style={[styles.container, outerContainerStyle]}>
            <Text style={styles.moreName}> {text} </Text>
            <View style={[styles.moreImage, innerContainerStyle]}>
                <Image style={styles.arrowStyle} source={require('../assets/photos/Path11.png')} />
            </View>
        </View>
    )

}
const direction = I18nManager.isRTL ? [] : [{rotateY: '180deg'}];
const styles = StyleSheet.create({
    container: {
      width:scale(77.98),
      height:verticalScale(31),
      backgroundColor:'white',
      flexDirection:'row',
      justifyContent:'space-around',
      borderRadius:38,
      alignItems:'center'
    },
    moreImage:{
        width:22.6,
        height:22.6,
        backgroundColor:'#FFDD00',
        borderRadius:11.3,
        alignItems:'center',
        justifyContent:'center'
    },
    arrowStyle:{
        width:scale(5.17),
        height:verticalScale(9.04),
        transform: direction, 
    }
  });
  export default MoreIcon;