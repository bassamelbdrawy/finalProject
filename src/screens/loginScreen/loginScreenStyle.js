import { StyleSheet,I18nManager } from 'react-native';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';


const direction = I18nManager.isRTL ? [] : [{rotateY: '180deg'}];

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFDD00',
        alignItems:'center'
    },
    logo:{
        resizeMode:'contain',
        width:scale(176),
        height:verticalScale(50),
        marginTop:verticalScale(130)
    },
    email:{
        width:scale(325),
        height:verticalScale(68),
        backgroundColor:'white',
        borderTopRightRadius:scale(15),
        borderTopLeftRadius:scale(15),
        marginTop:verticalScale(62)
    },
    password:{
        width:scale(325),
        height:verticalScale(68),
        backgroundColor:'white',
        borderBottomRightRadius:scale(15),
        borderBottomLeftRadius:scale(15),
        marginTop:verticalScale(1)
    },
    login:{
        marginTop:verticalScale(10)
    }
  });

  export default styles;