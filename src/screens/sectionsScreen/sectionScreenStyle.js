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
    sectionTitleView:{
        height:verticalScale(50),
        backgroundColor:'#F5F6F8',
        justifyContent:'center',
        alignItems:'center'
    },
    sectionTitle:{
        marginLeft:scale(-88),
        fontSize:14,
    },
    sectionContainer:{
        width:scale(360),
        height:verticalScale(590),
        backgroundColor:'#F5F6F8',
        flexDirection:'row'
    },
    section:{
        height:verticalScale(517),
        width:scale(85),
        alignItems:'center',
        justifyContent:'flex-start'
        
    },
    insection:{
        width:scale(265),
        height:verticalScale(530),
        borderRadius:15,
        backgroundColor:'white',
        alignItems:'center',
    }
  });

  export default styles;