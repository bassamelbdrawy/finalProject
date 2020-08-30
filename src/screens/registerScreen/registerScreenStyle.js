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
        marginTop:verticalScale(105)
    },
    email:{
        width:scale(325),
        height:verticalScale(68),
        backgroundColor:'white',
        borderTopRightRadius:scale(15),
        borderTopLeftRadius:scale(15),
        marginTop:verticalScale(62),
        flexDirection:'row',
        alignItems:'center',
    },
    password:{
        width:scale(325),
        height:verticalScale(68),
        backgroundColor:'white',
        borderBottomRightRadius:scale(15),
        borderBottomLeftRadius:scale(15),
        marginTop:verticalScale(1),
        flexDirection:'row',
        alignItems:'center',
    },
    login:{
        marginTop:verticalScale(10)
    },
    emailIcon:{
        width:scale(20),
        height:scale(20),
        resizeMode:'contain',
        marginLeft:scale(20)
    },
    emailView:{
        marginLeft:scale(10)
    },
    emailInput:{
        marginTop:scale(5)
    },
    emailText:{
        fontSize:moderateScale(12),
        color:'#515C6F'
    },
    forget:{
        marginTop:verticalScale(40),
        fontSize:moderateScale(13),
        color:'#612A7B'
    },
    register:{
        marginTop:verticalScale(20),
        fontSize:moderateScale(13),
        color:'#612A7B'
    },
    menuBottom:{
        height:verticalScale(12),
        width:scale(18),
        resizeMode: 'contain',
        transform:direction,
        marginRight:scale(285),
        marginTop:verticalScale(15)
        
    }
  });

  export default styles;