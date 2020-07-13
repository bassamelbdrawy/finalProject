
import {StyleSheet,I18nManager} from 'react-native';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';

const direction = I18nManager.isRTL ? [] : [{rotateY: '180deg'}];
export const styles = StyleSheet.create({
    container: {
      width:scale(335),
      height:verticalScale(48),
      backgroundColor:'white',
      flexDirection:'row',
      alignItems:'center',
      borderRadius:15,
      justifyContent:'space-between'
    },
    itemicon:{
        marginLeft:scale(20),
        width:scale(18),
        height:verticalScale(18),
        resizeMode:'contain'
    },
    moreName:{
        marginRight:scale(180),
        maxWidth:scale(94)
    },
    moreImage:{
        width:scale(18),
        height:scale(18),
        backgroundColor:'#612A7B',
        opacity:0.2,
        borderRadius:scale(9),
        alignItems:'center',
        justifyContent:'center',
        marginRight:scale(20)
    },
    arrowStyle:{
        width:scale(6),
        height:verticalScale(6),
        transform: direction,
         
    }
  });