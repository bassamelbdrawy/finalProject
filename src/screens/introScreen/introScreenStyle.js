import { StyleSheet } from 'react-native';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFDD00',
    },
    logo:{
      width: scale(209),
      height: verticalScale(60.16),
      resizeMode: 'contain',
      marginTop:verticalScale(190),
      marginLeft:scale(76),
    },
    icon:{
      width:scale(21.5),
      height:verticalScale(21.5),
      resizeMode:'contain',
      position:'absolute',
      marginTop:verticalScale(553),
      marginLeft:scale(169)
      
    }
  
  });

  export default styles;