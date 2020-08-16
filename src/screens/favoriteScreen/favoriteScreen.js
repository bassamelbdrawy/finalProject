
import React from 'react';
import{Text,SafeAreaView,View,TouchableOpacity,Image,FlatList} from 'react-native';
import DepartmentIcon from '../../components/departmenticon/departmenIcon';
import styles from './favoriteScreenStyle';
import strings from '../../localize/index';
import DrawerItem from '../../components/draweritem/draweritem';
import { verticalScale, scale, moderateScale } from '../../helper/scaling';
import { ScrollView } from 'react-native-gesture-handler';
import FavoriteIcon from '../../components/favoriteicon/favoriteIcon'


const favoriteData=[
  {"productName":"product","price":"100 sr","productIcon":require("../../assets/photos/N11045962A_1.png"),"favoriteLogo":require('../../assets/photos/Path113.png')},
  {"productName":"product","price":"100 sr","productIcon":require("../../assets/photos/N11045962A_1.png"),"favoriteLogo":require('../../assets/photos/Path113.png')},
  {"productName":"product","price":"100 sr","productIcon":require("../../assets/photos/N11045962A_1.png"),"favoriteLogo":require('../../assets/photos/Path113.png')},
  {"productName":"product","price":"100 sr","productIcon":require("../../assets/photos/N11045962A_1.png"),"favoriteLogo":require('../../assets/photos/Path113.png')},
  {"productName":"product","price":"100 sr","productIcon":require("../../assets/photos/N11045962A_1.png"),"favoriteLogo":require('../../assets/photos/Path113.png')},
  {"productName":"product","price":"100 sr","productIcon":require("../../assets/photos/N11045962A_1.png"),"favoriteLogo":require('../../assets/photos/Path113.png')},
  {"productName":"product","price":"100 sr","productIcon":require("../../assets/photos/N11045962A_1.png"),"favoriteLogo":require('../../assets/photos/Path113.png')},
  {"productName":"product","price":"100 sr","productIcon":require("../../assets/photos/N11045962A_1.png"),"favoriteLogo":require('../../assets/photos/Path113.png')},
  

]

export default class favoriteScreen extends React.Component {

  renderFavoriteItems=({item})=>{
    return(
      <FavoriteIcon product={item.productName} price={item.price} image={item.productIcon} favoriteLogo={item.favoriteLogo}/>
    )
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer()}}>
                    <Image style={styles.menuBottom}  source={require('../../assets/photos/More.png')}/>
                </TouchableOpacity>
                <Text style={{fontSize:moderateScale(18),color:'#612A7B'}}>{strings.favourite}</Text>
                <Image style={styles.cartBottom}  source={require('../../assets/photos/Cart.png')}/>
            </View>
            <View style={styles.Container}>
              <FlatList
                      style={styles.favoriteContainer}
                      numColumns={2}
                      ItemSeparatorComponent={() => <View style={{width: scale(5)}}/>}
                      data={favoriteData}
                      renderItem={this.renderFavoriteItems}
                      />
            </View>
        </SafeAreaView>
    )}};