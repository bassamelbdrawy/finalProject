import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image,StyleSheet} from 'react-native';
import {scale,verticalScale,moderateScale} from '../helper/scaling';


function MoreIcon({text}){
    return(
        <View style={styles.container}>
            <Text style={styles.moreName}> {text} </Text>
            <View style={styles.moreImage}>
                <Image style={ I18nManager.isRTL? styles.leftArrow : styles.rightArrow} source={require('../assets/photos/Path11.png')} />
            </View>
        </View>
    )

}

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
    rightArrow:{
        width:scale(5.17),
        height:verticalScale(9.04),
        transform: [
            { rotateY: '180deg'},
          ], 
    },
    leftArrow:{
        width:scale(5.17),
        height:verticalScale(9.04),
    }
  
  });
  export default MoreIcon;