
import {StyleSheet,I18nManager} from 'react-native';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';

const direction = I18nManager.isRTL ? [] : [{rotateY: '180deg'}];
export const styles = StyleSheet.create({
    container: {
      width:scale(330),
      height:verticalScale(46),
      backgroundColor:'#612A7B',
      flexDirection:'row',
      borderRadius:38,
      alignItems:'center'
    },
    moreImage:{
        width:28,
        height:28,
        backgroundColor:'white',
        borderRadius:14,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:scale(100)
    },
    arrowStyle:{
        width:scale(6),
        height:verticalScale(11),
        transform: direction, 
        tintColor:'#FFDD00'
    },
    moreName:{
      color:'white',
      fontSize:moderateScale(16),
      marginLeft:scale(150)
      
    }
  });