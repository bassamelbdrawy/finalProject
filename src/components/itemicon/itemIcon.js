import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image,StyleSheet} from 'react-native';
import {styles} from './itemIconStyle';



function ItemIcon({image,product,category,price}){
    return(
        <View style={styles.container}>
            <View style={styles.priceview}>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Image style={styles.image} source={image}/>
            <Text style={styles.product} numberOfLines={1}> {product} </Text>
            <Text style={styles.category} numberOfLines={1}> {category}</Text>
        </View>
    )

}

  export default ItemIcon;