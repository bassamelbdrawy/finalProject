import { StyleSheet,I18nManager,Dimensions } from 'react-native';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';


const direction = I18nManager.isRTL ? [] : [{rotateY: '180deg'}];
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFDD00',
        alignItems:'center'
    },
    menuBottom:{
        height:verticalScale(12),
        width:scale(18),
        resizeMode: 'contain',
        transform:direction,
        marginRight:scale(285),
        marginTop:verticalScale(15)
        
    },
    title:{
        fontSize:moderateScale(35),
        color:'#612A7B',
        marginTop:verticalScale(33),
    },
    desc:{
        fontSize:moderateScale(12),
        color:'#515C6F',
        marginTop:verticalScale(5),
        maxWidth:scale(214),
        textAlign:'center'
    },
    barsView:{
        flex:1,
        backgroundColor:'#F5F6F8',
        width:width,
        marginTop:verticalScale(90),
        alignItems:'center'
        
    },
    username:{
        width:scale(325),
        height:verticalScale(68),
        backgroundColor:'white',
        borderTopRightRadius:scale(15),
        borderTopLeftRadius:scale(15),
        marginTop:verticalScale(-45),
        flexDirection:'row',
        alignItems:'center',
    },
    usernameIcon:{
        width:scale(20),
        height:scale(20),
        resizeMode:'contain',
        marginLeft:scale(20)
    },
    usernameView:{
        marginLeft:scale(10)
    },
    usernameInput:{
        marginTop:scale(5)
    },
    usernameText:{
        fontSize:moderateScale(12),
        color:'#515C6F'
    },
    regular:{
        width:scale(325),
        height:verticalScale(68),
        backgroundColor:'white',
        marginTop:verticalScale(3),
        flexDirection:'row',
        alignItems:'center',
    },
    regularIcon:{
        width:scale(20),
        height:scale(20),
        resizeMode:'contain',
        marginLeft:scale(20)
    },
    regularView:{
        marginLeft:scale(10)
    },
    regularInput:{
        marginTop:scale(5)
    },
    regularText:{
        fontSize:moderateScale(12),
        color:'#515C6F'
    },
    password:{
        width:scale(325),
        height:verticalScale(68),
        backgroundColor:'white',
        borderBottomRightRadius:scale(15),
        borderBottomLeftRadius:scale(15),
        marginTop:verticalScale(3),
        flexDirection:'row',
        alignItems:'center',
    },
    register:{
        marginTop:verticalScale(15)
    }
  });

  export default styles;