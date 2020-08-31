
import React from 'react';
import{Text,SafeAreaView,View,TouchableOpacity,Image,FlatList} from 'react-native';
import DepartmentIcon from '../../components/departmenticon/departmenIcon';
import styles from './busketScreenStyle';
import strings from '../../localize/index';
import DrawerItem from '../../components/draweritem/draweritem';
import { verticalScale, scale, moderateScale } from '../../helper/scaling';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import FavoriteIcon from '../../components/favoriteicon/favoriteIcon'
import LoginIcon from '../../components/loginIcon/loginIcon';


export default class busketScreen extends React.Component {

  render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer()}}>
                    <Image style={styles.menuBottom}  source={require('../../assets/photos/More.png')}/>
                </TouchableOpacity>
                <Text style={{fontSize:moderateScale(18),color:'#612A7B'}}>{strings.busket}</Text>
                <Image style={styles.cartBottom}  source={require('../../assets/photos/Cart.png')}/>
            </View>
        </SafeAreaView>
    )}};