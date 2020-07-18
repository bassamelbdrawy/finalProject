import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image,StyleSheet} from 'react-native';
import {styles} from './departmentIconStyle';



function DepartmentIcon({name,image,edit,editImage}){
    return(
        <View style={[styles.container ,edit]}>
            <Image style={[styles.departmentImage, editImage]} source={image}/>
            <Text style={styles.departmentName}> {name} </Text>
        </View>
    )

}
  export default DepartmentIcon;