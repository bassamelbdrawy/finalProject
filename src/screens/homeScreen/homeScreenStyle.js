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
    departments:{
        height:verticalScale(158),
        width:scale(410),
        backgroundColor:'white',

    },
    departmentList:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:scale(20),
        marginLeft:scale(20),
        
    },
    itemsContainer:{
        backgroundColor:'#F5F6F8',
        width:scale(373),
        height:verticalScale(565)
    },
    itemsTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:scale(20),
        marginLeft:scale(20),
        marginTop:verticalScale(16)
    }
  
  });

  export default styles;