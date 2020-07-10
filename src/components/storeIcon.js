import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image,StyleSheet} from 'react-native';
import {scale,verticalScale,moderateScale} from '../helper/scaling';


function StoreIcon({storeName,rate,image}){
    return(
        <View style={styles.container}>
            <Image style={styles.storeImage} source={image}/>
            <View style={styles.storeText}>
              <Text style={styles.storeName}> {storeName} </Text>
              <Text style={styles.rate}> {rate} </Text>
            </View> 
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      width:scale(135),
      height:verticalScale(90),
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      marginTop:verticalScale(10),
      marginRight:scale(10) 
    },
    storeImage:{
      width:130,
      height: 130,
      resizeMode: 'contain',
    },
    storeText:{
      flexDirection:'column',
      marginLeft:scale(-20),
    },
    storeNmae:{
      textAlign:'left',
    },
    rate:{
      textAlign:'left'
    }
  
  });
  export default StoreIcon;