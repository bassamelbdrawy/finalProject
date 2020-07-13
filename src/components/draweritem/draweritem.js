import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image,StyleSheet} from 'react-native';
import {styles} from './draweritemstyle';


function DrawerItem({text,image, outerContainerStyle, innerContainerStyle}){
    return(
        <View style={[styles.container, outerContainerStyle]}>
            <Image style={styles.itemicon} source={image}/>
            <Text style={styles.moreName}> {text} </Text>
            <View style={[styles.moreImage, innerContainerStyle]}>
                <Image style={styles.arrowStyle} source={require('../../assets/photos/Path11.png')} />
            </View>
        </View>
    )

}
  export default DrawerItem;