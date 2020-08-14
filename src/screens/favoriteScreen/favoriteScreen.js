
import React from 'react';
import{Text,SafeAreaView,View,TouchableOpacity,Image} from 'react-native';
import DepartmentIcon from '../../components/departmenticon/departmenIcon';
import styles from './favoriteScreenStyle';
import strings from '../../localize/index';
import DrawerItem from '../../components/draweritem/draweritem';
import { verticalScale, scale } from '../../helper/scaling';
import { ScrollView } from 'react-native-gesture-handler';
import FavoriteIcon from '../../components/favoriteicon/favoriteIcon'

export default class favoriteScreen extends React.Component {

  render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer()}}>
                    <Image style={styles.menuBottom}  source={require('../../assets/photos/More.png')}/>
                </TouchableOpacity>
                <Text>{strings.favourite}</Text>
                <Image style={styles.cartBottom}  source={require('../../assets/photos/Cart.png')}/>
            </View>
            <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.favoriteContainer}>
            <FavoriteIcon product ={strings.product}  category= {strings.category} price={strings.sr100} image={require('../../assets/photos/N11045962A_1.png')} favoriteLogo={require('../../assets/photos/Path113.png')}/>
            <FavoriteIcon product ={strings.product}  category= {strings.category} price={strings.sr100} image={require('../../assets/photos/N11045962A_1.png')} favoriteLogo={require('../../assets/photos/Path113.png')}/>
            <FavoriteIcon product ={strings.product}  category= {strings.category} price={strings.sr100} image={require('../../assets/photos/N11045962A_1.png')} favoriteLogo={require('../../assets/photos/Path113.png')}/>
            <FavoriteIcon product ={strings.product}  category= {strings.category} price={strings.sr100} image={require('../../assets/photos/N11045962A_1.png')} favoriteLogo={require('../../assets/photos/Path113.png')}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )}};