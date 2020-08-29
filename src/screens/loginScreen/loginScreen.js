
import React from 'react';
import{Text,SafeAreaView,View,TouchableOpacity,Image,FlatList} from 'react-native';
import DepartmentIcon from '../../components/departmenticon/departmenIcon';
import styles from './loginScreenStyle';
import strings from '../../localize/index';
import DrawerItem from '../../components/draweritem/draweritem';
import { verticalScale, scale, moderateScale } from '../../helper/scaling';
import { ScrollView } from 'react-native-gesture-handler';
import FavoriteIcon from '../../components/favoriteicon/favoriteIcon'
import LoginIcon from '../../components/loginIcon/loginIcon';


export default class loginScreen extends React.Component {

  render() {
    return (
        <SafeAreaView style={styles.container}>
           <Image style={styles.logo} source={require('../../assets/photos/Group161.png')}/>
           <View style={styles.email}>

           </View>
           <View style={styles.password}>

           </View>
           <View  style={styles.login}>
              <LoginIcon text='Login'/>
           </View>
        </SafeAreaView>
    )}};