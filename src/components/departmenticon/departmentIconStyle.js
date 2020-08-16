
import { StyleSheet } from 'react-native';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';

export const styles = StyleSheet.create({
    container: {
      //flex: 1,
      width:scale(57),
      height:verticalScale(66),
     
    },
    departmentView:{
      width:scale(48),
      height:scale(48),
      borderRadius:scale(24),
      backgroundColor:'#612A7B',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: verticalScale(5)
    },
    departmentImage:{
      resizeMode: 'contain',
      tintColor: '#fff'
    },
    departmentName:{
      maxWidth:scale(55),
      color:'#0F3447'
    },
    pressedView: {
      backgroundColor: '#FFDD00'
    },
    pressedImage: {
      tintColor: '#0F3447'
    }
  
  });