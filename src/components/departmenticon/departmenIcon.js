import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image,StyleSheet} from 'react-native';
import {styles} from './departmentIconStyle';



function DepartmentIcon({name,image}){
    return(
        <View style={styles.container}>
            <Image style={styles.departmentImage} source={image}/>
            <Text style={styles.departmentName}> {name} </Text>
        </View>
    )

}
  export default DepartmentIcon;