
import {StyleSheet,I18nManager} from 'react-native';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';

const direction = I18nManager.isRTL ? [] : [{rotateY: '180deg'}];
export const styles = StyleSheet.create({
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
    },
    moreName:{
      color:'#6954A3'
    }
  });