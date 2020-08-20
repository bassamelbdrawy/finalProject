
import React from 'react';
import{Text,SafeAreaView,View,TouchableOpacity,Image,FlatList} from 'react-native';
import DepartmentIcon from '../../components/departmenticon/departmenIcon';
import styles from './sectionDetailsScreenStyle';
import strings from '../../localize/index';
import DrawerItem from '../../components/draweritem/draweritem';
import { verticalScale, scale, moderateScale } from '../../helper/scaling';
import { ScrollView } from 'react-native-gesture-handler';
import FavoriteIcon from '../../components/favoriteicon/favoriteIcon'


const barData=[
    {"itemName":"All"},
    {"itemName":"MostWatched"},
    {"itemName":"CategoryName"},
    {"itemName":"CategoryName"}
]


export default class sectionDetailsScreen extends React.Component {


renderSectionDetailsItems=({item})=>{
    return(
        <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('itemDetailsScreen',{productName:item.productName})}}>
            <FavoriteIcon product={item.productName} price={item.price} image={item.image} favoriteLogo={require('../../assets/photos/star.png')} />
        </TouchableOpacity>
    )
}

renderBarItems=({item})=>{
    return(
        <TouchableOpacity>
            <Text style={styles.barText}>{item.itemName}</Text>
        </TouchableOpacity>
    )
}

  render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={()=>{this.props.navigation.pop()}}>
                    <Image style={styles.menuBottom}  source={require('../../assets/photos/arr.png')}/>
                </TouchableOpacity>
                <Text style={{fontSize:moderateScale(18),color:'#612A7B'}}>{this.props.route.params.itemname}</Text>
                <Image style={styles.cartBottom}  source={require('../../assets/photos/Cart.png')}/>
            </View>
            <View style={styles.itemBar}>
                <View style={styles.sort}>
                    <Image style={styles.barIcon} source={require('../../assets/photos/20.png')}/>
                </View>
                <FlatList
                      style={styles.barContainer}
                      contentContainerStyle={styles.insideList}
                      numColumns={1}
                      horizontal={true}
                      ItemSeparatorComponent={() => <View style={{width: scale(30)}}/>}
                      data={barData}
                      renderItem={this.renderBarItems}
                      />
            </View>
            <View style={styles.Container}>
              <FlatList
                      style={styles.favoriteContainer}
                      numColumns={2}
                      ItemSeparatorComponent={() => <View style={{width: scale(5)}}/>}
                      data={this.props.route.params.extradata}
                      renderItem={this.renderSectionDetailsItems}
                      />
            </View>
        </SafeAreaView>
    )}};