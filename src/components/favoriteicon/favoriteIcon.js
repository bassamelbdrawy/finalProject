import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image,StyleSheet} from 'react-native';
import {styles} from './favoriteIconStyle';



function FavoriteIcon({image,product,price,favoriteLogo}){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.product} numberOfLines={1}> {product} </Text>
            <View style={styles.priceView}>
                <Text style={styles.price} numberOfLines={1}> {price}</Text>
                <Image style={styles.favoriteLogo} source={favoriteLogo}></Image>
            </View>
        </View>
    )

}

  export default FavoriteIcon;