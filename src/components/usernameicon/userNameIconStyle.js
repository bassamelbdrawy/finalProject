
import {StyleSheet,I18nManager} from 'react-native';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';


export const styles = StyleSheet.create({
    container: {
      width:scale(160),
      height:verticalScale(60),
      backgroundColor:'white',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    userphoto:{
        width:scale(60),
        height:scale(60),
        resizeMode:'contain',
        marginLeft:scale(20),
    },
    userdetails:{
        flexDirection:'column',
        marginLeft:scale(10)
    },
    username:{
        fontSize:moderateScale(18),
        color:'#612A7B',
    },
    email:{
      fontSize:moderateScale(12),
      color:'#515C6F'
    }
 
  });