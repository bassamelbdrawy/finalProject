
import { StyleSheet } from 'react-native';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:scale(57),
      height:verticalScale(66),
     
    },
    departmentImage:{
      width: scale(48),
      height: verticalScale(48),
      resizeMode: 'contain',
      marginBottom:verticalScale(8),
      marginTop:verticalScale(30)
    },
    departmentName:{
      width:scale(45),
      height:verticalScale(12),
      maxWidth:scale(55)

        
    }

  
  });