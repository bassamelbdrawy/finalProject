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
        backgroundColor:'white',
        height:verticalScale(300),
        alignItems:'center'
      },
    productImage:{
        marginTop:verticalScale(5),
        width:scale(117),
        height:verticalScale(157),
        resizeMode:'contain'
    },
    productName:{
        fontSize:moderateScale(20),
        color:'#4B6584',
        marginTop:verticalScale(25)
    },
    rateAndPrice:{
        flexDirection:'row',
        marginTop:scale(10),
        
   },
    priceView:{
        width:scale(55),
        height:verticalScale(16),
        backgroundColor:'#612A7B',
        borderRadius:verticalScale(8),
        alignItems:'center',
        justifyContent:'center',
       
    },
    rateView:{
        width:scale(37),
        height:verticalScale(16),
        backgroundColor:'#612A7B',
        borderRadius:verticalScale(8),
        alignItems:'center',
        justifyContent:'center',
        marginLeft:scale(10)
    },
    productPrice:{
        fontSize:moderateScale(11),
        color:'#FFDD00'
    },
    productRate:{
        fontSize:moderateScale(11),
        color:'white'
    },
    descView:{
        flexDirection:'row',
        width:scale(360),
        justifyContent:'space-around',
        marginTop:verticalScale(40)
    },
    descDataStyle:{
        flex:1,
        backgroundColor:'#F5F6F8',
    },
    descText:{
        fontSize:moderateScale(12),
        color:'#4B6584',
        marginLeft:scale(20),
        marginTop:scale(20),
        maxWidth:scale(315)
    },
    moveBar:{
        flexDirection:'row',
        width:scale(360),
        justifyContent:'space-around',
        backgroundColor:'#F5F6F8',
        position:'absolute',
        marginTop:verticalScale(580),
    },
    addCart:{
        width:scale(157),
        height:verticalScale(44),
        borderRadius:verticalScale(22),
        backgroundColor:'#FFDD00',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    share:{
        width:scale(157),
        height:verticalScale(44),
        borderRadius:verticalScale(22),
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    cartView:{
        width:scale(28),
        height:scale(28),
        borderRadius:scale(14),
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    shareView:{
        width:scale(28),
        height:scale(28),
        borderRadius:scale(14),
        backgroundColor:'#612A7B',
        alignItems:'center',
        justifyContent:'center'
    },
    cartText:{
        fontSize:moderateScale(15),
        color:'#612A7B',
        marginRight:scale(20)
    },
    shareText:{
        fontSize:moderateScale(13),
        color:'#612A7B',
    }
  });

  export default styles;