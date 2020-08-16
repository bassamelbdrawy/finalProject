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
    navTitle:{
        fontSize:moderateScale(18),
        color:'#612A7B'
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
        //justifyContent:'center',
        //alignItems:'center'

    },
    sectionTitle:{
        marginBottom: verticalScale(15),
        textAlign:'left',
        fontSize:moderateScale(12),
        color:'#612A7B'
    },
    sectionContainer:{
        flex: 1,
        backgroundColor:'#F5F6F8',
        flexDirection:'row',
        paddingVertical: verticalScale(20),
        paddingHorizontal: scale(10)
    },
    section:{
        marginRight: scale(15),
        marginTop: verticalScale(22)
    },
    insection:{
        width:scale(265),
        height:verticalScale(500),
        borderRadius:15,
        backgroundColor:'white',
    },
    subSectionContainerStyle: {
        flex: 1,
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(10)
    }
  });

  export default styles;