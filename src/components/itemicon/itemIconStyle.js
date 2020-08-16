
import {StyleSheet} from 'react-native';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';

export const styles = StyleSheet.create({
    container: {
      width:scale(106.81),
      height:verticalScale(143),
      backgroundColor:'white',
      borderRadius:15,
      flexDirection:'column',
      justifyContent:'center',
      marginLeft:scale(20),
     
     
    },
    priceview:{
        width:29,
        height:29,
        borderRadius:14.5,
        backgroundColor:'#FFDD00',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:scale(10),
       
    },
    image:{
      width: scale(76.34),
      height: verticalScale(103.57),
      resizeMode: 'contain',
      marginBottom:verticalScale(-20),
      marginLeft:scale(10),
      
    },
    product:{
        textAlign:'left',
        marginTop:verticalScale(5),
        maxWidth:scale(55),
        fontSize:moderateScale(11),
        color:'#6954A3',
    },
    category:{
        textAlign:'left',
        maxWidth:scale(55),
        fontSize:moderateScale(10),
        color:'#A5B1C2',
    },
    price:{
        fontSize:8,
        color:'#612A7B'
    }
  
  });