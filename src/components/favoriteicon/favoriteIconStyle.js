
import {StyleSheet} from 'react-native';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';

export const styles = StyleSheet.create({
    container: {
      width:scale(151),
      height:verticalScale(202),
      backgroundColor:'white',
      borderRadius:15,
      flexDirection:'column',
      justifyContent:'center',
      marginLeft:scale(20),
      marginTop:scale(20)
     
     
    },
    image:{
      width: scale(101),
      height: verticalScale(134),
      resizeMode: 'contain',
      marginLeft:scale(20),
      
    },
    product:{
        textAlign:'left',
        marginTop:verticalScale(5),
        marginLeft:scale(10),
        fontSize:16,
        maxWidth:scale(70),
        color:'#4B6584'
    },
    priceView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:scale(10),
        marginRight:scale(10)
    },
    price:{
        color:'#FFDD00'  
    },
    favoriteLogo:{
        width:scale(20),
        height:verticalScale(20),
        resizeMode:'contain',

    }
    
  });