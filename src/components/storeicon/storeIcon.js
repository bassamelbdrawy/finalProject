import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image,StyleSheet} from 'react-native';
import {styles} from './storeIconStyle';



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

  export default StoreIcon;