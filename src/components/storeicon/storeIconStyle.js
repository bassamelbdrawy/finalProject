
import {StyleSheet} from 'react-native';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';


export const styles = StyleSheet.create({
    container: {
      width:scale(135),
      height:verticalScale(90),
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      marginTop:verticalScale(10),
      marginRight:scale(10) 
    },
    storeImage:{
      width:130,
      height: 130,
      resizeMode: 'contain',
    },
    storeText:{
      flexDirection:'column',
      marginLeft:scale(-20),
    },
    storeNmae:{
      textAlign:'left',
    },
    rate:{
      textAlign:'left'
    }
  
  });