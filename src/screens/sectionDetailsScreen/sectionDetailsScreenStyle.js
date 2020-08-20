import { StyleSheet,I18nManager } from 'react-native';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';


const direction = I18nManager.isRTL ? [] : [{rotateY: '180deg'}];

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFDD00',
    },
    nav:{
        height:verticalScale(40),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',

    },
    cartBottom:{
        height:verticalScale(18),
        width:scale(18.54),
        resizeMode: 'contain',
        marginRight:scale(20)
        
    },
    menuBottom:{
        height:verticalScale(12),
        width:scale(18),
        resizeMode: 'contain',
        marginLeft:scale(20),
        transform:direction
        
    },
    navtext:{
        textAlign:'center',
        fontSize:18,
    },
    Container:{ 
        flex:1,   
      },
      favoriteContainer:{
          backgroundColor:'#F5F6F8',
      },
      itemBar:{
          height:verticalScale(50),
          flexDirection:'row',
      },
      sort:{
         backgroundColor:'#612A7B',
         height:verticalScale(50),
         width:scale(50),
         alignItems:'center',
         justifyContent:'center'
      },
      barIcon:{
          width:scale(14),
          height:verticalScale(14)
      },
      barContainer:{
         backgroundColor:'white'
      },
      insideList:{
          alignItems:'center',
          marginLeft:scale(15)
      },
      barText:{
          fontSize:13,
          color:'#727C8E'
      }
  });

  export default styles;