import { StyleSheet } from 'react-native';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFDD00',
    },
    nav:{
        height:verticalScale(186),
        alignItems:'center',

    },
    navIcons:{
        height:verticalScale(18),
        width:scale(322.5),
        flexDirection:'row',
        marginTop:verticalScale(10),
        alignItems:'center',

        
    },
    cartBottom:{
        height:verticalScale(18),
        width:scale(18.54),
        resizeMode: 'contain',
        
    },
    logo:{
        height:verticalScale(21.5),
        width:scale(74.69),
        resizeMode: 'contain',
        marginRight:scale(195)

    },
    menuBottom:{
        height:verticalScale(12),
        width:scale(18),
        resizeMode: 'contain',
        marginRight:scale(18)
        
    },
    ad:{
        width:scale(330),
        height:verticalScale(181),
        backgroundColor:'#6954A3',
        marginTop:verticalScale(-137),
        marginLeft:scale(15),
        borderRadius:15,
        

    },
    adPhoto:{
        width:scale(330),
        height:verticalScale(192),
        borderRadius:15,
        resizeMode:'cover',
        position:'absolute',
        opacity:0.18
    }
    ,
    departments:{
        height:verticalScale(158),
        width:scale(410),
        backgroundColor:'white',

    },
    departmentList:{
        marginRight:scale(20),
        marginLeft:scale(20),
        
    },
    itemsContainer:{
        backgroundColor:'#F5F6F8',
    },
    itemsTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:scale(20),
        marginLeft:scale(20),
        marginTop:verticalScale(16)
    },
    itemsList:{
        marginTop:verticalScale(10),
        marginBottom:verticalScale(10)
    },
    adImageView:{
        height:verticalScale(145),
        width:scale(360),
        alignItems:'center'
    },
    adImage:{
        width:scale(320),
        height:verticalScale(100),
        resizeMode:'contain'
    },
    storeView:{
        width:scale(360),
        height:verticalScale(132)
    },
    storeText:{
        textAlign:'left',
        marginTop:verticalScale(10),
        marginLeft:scale(10)
    },
    storeList:{
        flexDirection:'row',
        justifyContent:'space-between',
    }
  
  });

  export default styles;