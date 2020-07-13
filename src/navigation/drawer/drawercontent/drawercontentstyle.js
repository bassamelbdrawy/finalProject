import { StyleSheet } from 'react-native';
import {scale,verticalScale,moderateScale} from'../../../helper/scaling';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFDD00',
    },
    header:{
        flexDirection:'row',
        alignItems:'center'
    },
    close:{
        width:scale(14),
        height:scale(14),
        marginLeft:scale(16)
    },
    logo:{
        width:scale(102),
        height:verticalScale(29.5),
        resizeMode:'contain',
        marginLeft:scale(98)
    },
    profileView:{
        width:scale(335),
        height:verticalScale(91),
        backgroundColor:'white',
        borderRadius:15,
        marginLeft:scale(12),
        marginTop:verticalScale(20),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    settingIcon:{
        marginRight:scale(17),
        width:scale(24),
        height:scale(24),
        resizeMode:'contain'
    },
    drawerItems:{
        width:scale(335),
        height:verticalScale(248),
        backgroundColor:'white',
        borderRadius:15,
        marginLeft:scale(12),
        marginTop:verticalScale(10)
    },
    terms:{
        width:scale(335),
        height:verticalScale(101),
        borderRadius:15,
        marginTop:verticalScale(15),
        backgroundColor:'white',
        marginLeft:scale(12)
    }
  
  });

  export default styles;