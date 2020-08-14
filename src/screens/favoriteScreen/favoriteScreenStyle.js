import { StyleSheet } from 'react-native';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';

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
        marginLeft:scale(20)
        
    },
    navtext:{
        textAlign:'center',
        fontSize:18,
    },
    scrollViewContainer:{
        backgroundColor:'#F5F6F8',
    },
    favoriteContainer:{
        flexDirection:'row',
       
        
        maxWidth:scale(360)

    }
  });

  export default styles;