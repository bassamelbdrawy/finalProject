
import React from 'react';
import{Text,SafeAreaView,View,TouchableOpacity,Image,FlatList} from 'react-native';
import DepartmentIcon from '../../components/departmenticon/departmenIcon';
import styles from './itemDetailsScreenStyle';
import strings from '../../localize/index';
import DrawerItem from '../../components/draweritem/draweritem';
import { verticalScale, scale, moderateScale } from '../../helper/scaling';
import { ScrollView } from 'react-native-gesture-handler';
import FavoriteIcon from '../../components/favoriteicon/favoriteIcon'


const descData =[
    {"itemName":"description","itemText":"this is the Description"},
    {"itemName":"comments","itemText":"this is the comments"},
    {"itemName":"others","itemText":"this is the Others"}
]

export default class itemDetailsScreen extends React.Component {

    state={
        index: 0
    }

  render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={()=>{this.props.navigation.pop()}}>
                    <Image style={styles.menuBottom}  source={require('../../assets/photos/arr.png')}/>
                </TouchableOpacity>
                <Text style={{fontSize:moderateScale(18),color:'#612A7B'}}>{this.props.route.params.productName}</Text>
                <Image style={styles.cartBottom}  source={require('../../assets/photos/Cart.png')}/>
            </View>
            <View style={styles.Container}>
                <Image style={styles.productImage} source={this.props.route.params.image}/>
                <Text style={styles.productName}>{this.props.route.params.productName}</Text>
                <View style={styles.rateAndPrice}>
                    <View style={styles.priceView}>
                        <Text style={styles.productPrice}>{this.props.route.params.price}</Text>
                    </View>
                    <View style={styles.rateView}>
                        <Text style={styles.productRate}>4.9</Text>
                    </View>  
            </View>
            <View style={styles.descView}>
                    <TouchableOpacity onPress = {()=>{this.setState({index:0})}}>
                        <Text style={[{fontSize:moderateScale(13),color:'#727C8E'},this.state.index === 0 &&{color:'#612A7B'}]}>Description</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this.setState({index:1})}}>
                        <Text style={[{fontSize:moderateScale(13),color:'#727C8E'},this.state.index === 1 &&{color:'#612A7B'}]}>Comments</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this.setState({index:2})}}>
                        <Text style={[{fontSize:moderateScale(13),color:'#727C8E'},this.state.index === 2 &&{color:'#612A7B'}]}>Others</Text>
                    </TouchableOpacity>
            </View>  
        </View>
        <View style={styles.descDataStyle}>
            <Text style={styles.descText}>{descData[this.state.index].itemText}</Text>
        </View>   
        <View style={styles.moveBar}>
            <TouchableOpacity style={styles.addCart}>
                <View style={styles.cartView}>
                    <Image source={require('../../assets/photos/Cart.png')}/>
                </View>
                <Text style={styles.cartText}> Add To Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.share}>
                <View style={styles.shareView}>
                    <Image source={require('../../assets/photos/share-arrow.png')}/>
                </View>
                <Text style={styles.shareText}>Share With Friends</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )}};