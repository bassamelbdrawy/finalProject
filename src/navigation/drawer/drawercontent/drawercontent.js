import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {DrawerContentScrollView,} from '@react-navigation/drawer';
import styles from './drawercontentstyle';
import UserNameIcon from '../../../components/usernameicon/userNameIcon';
import DrawerItem from '../../../components/draweritem/draweritem';
import strings from '../../../localize/';
import { verticalScale, moderateScale } from '../../../helper/scaling';


export default function DrawerContent(props){
    return(
           <DrawerContentScrollView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>{props.navigation.closeDrawer()}}>
                        <Image style={styles.close}  source={require('../../../assets/photos/X.png')}/>
                    </TouchableOpacity>   
                    <Image style={styles.logo}  source={require('../../../assets/photos/Group161.png')}/>
                </View>  
                <View style={styles.profileView}>
                    <UserNameIcon username='tarek ahmed' email='email@email.com' image={require('../../../assets/photos/profile.png')}/>
                    <Image style={styles.settingIcon} source={require('../../../assets/photos/Outline.png')} />
                </View>   
                <View style={styles.drawerItems}>
                  
                    <DrawerItem text={strings.homepage} image={require('../../../assets/photos/Home.png')} onClick={()=>{props.navigation.navigate('homeStack')}}/>
                    <DrawerItem text={strings.sections} image={require('../../../assets/photos/rate.png')} onClick={()=>{props.navigation.navigate('sectionStack')}}/>
                    <DrawerItem text={strings.favourite} image={require('../../../assets/photos/Path114.png')} onClick={()=>{props.navigation.navigate('favoriteStack')}}/>
                    <DrawerItem text={strings.busket} image={require('../../../assets/photos/finished.png')} onClick={()=>{props.navigation.navigate('busketStack')}}/>
                    <DrawerItem text={strings.search} image={require('../../../assets/photos/Search.png')}/>
                </View>
                <View style={styles.terms}>
                    <DrawerItem text={strings.whoarewe} image={require('../../../assets/photos/man.png')}/>
                    <DrawerItem text={strings.contactus} image={require('../../../assets/photos/Messages.png')}/>
                </View>
                <Text style={{textAlign:'center', marginTop:verticalScale(40),fontsize:moderateScale(14),color:'#612A7B'}}>{strings.logout}</Text>
            </DrawerContentScrollView> 
    );
}


//<DrawerItem label='section' onPress={()=>{props.navigation.navigate('sectionStack')}}/>
//<DrawerItem label='favorite' onPress={()=>{props.navigation.navigate('favoriteStack')}}/>