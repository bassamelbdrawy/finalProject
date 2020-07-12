import React from 'react';
import {View,Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';



export default function DrawerContent(props){
    return(
           <DrawerContentScrollView>
               <Text>hello</Text>
               <DrawerItem label='section' onPress={()=>{props.navigation.navigate('sectionStack')}}/>
               <DrawerItem label='favorite' onPress={()=>{props.navigation.navigate('favoriteStack')}}/>
            </DrawerContentScrollView> 
    );
}

