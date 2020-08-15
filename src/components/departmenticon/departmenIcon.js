import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image,StyleSheet} from 'react-native';
import {styles} from './departmentIconStyle';
import { scale } from '../../helper/scaling';

function DepartmentIcon({name,image,edit,editImage, key, onClick=() => {}, pressed = false}){
    return(
        <TouchableOpacity key={key} style={[styles.container]} onPress={() => onClick()}>
            <View style={[styles.departmentView,edit, pressed && styles.pressedView]}>
                <Image style={[styles.departmentImage, editImage, pressed && styles.pressedImage]} source={image}/>
            </View>
            <Text style={styles.departmentName} numberOfLines={1}> {name} </Text>
        </TouchableOpacity>
    )

}
  export default DepartmentIcon;