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
        marginTop:verticalScale(62),
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
    }
  });

  export default styles;