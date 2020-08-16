
import {StyleSheet} from 'react-native';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';


export const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      alignItems:'center',
    },
    storeImage:{
      width:130,
      height: 130,
      resizeMode: 'contain',
    },
    storeText:{
      flexDirection:'column',
      marginLeft:scale(-20)
      
    },
    storeNmae:{
      textAlign:'left',
      fontSize:moderateScale(18),
      color:'#0F3447'
    },
    rate:{
      textAlign:'left',
      fontSize:moderateScale(15),
      color:'#646768'
    }
  
  });