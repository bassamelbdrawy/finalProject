import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image,StyleSheet} from 'react-native';
import {styles} from './userNameIconStyle';



function UserNameIcon({image,username,email}){
    return(
        <View style={styles.container}>
            <Image style={styles.userphoto} source={image}/>
            <View style={styles.userdetails}>
                <Text>{username}</Text>
                <Text>{email}</Text>
            </View>
        </View>
    )

}

  export default UserNameIcon;