
import React from 'react';
import{Text,SafeAreaView,View,TouchableOpacity,Image,FlatList} from 'react-native';
import DepartmentIcon from '../../components/departmenticon/departmenIcon';
import styles from './itemDetailsScreenStyle';
import strings from '../../localize/index';
import DrawerItem from '../../components/draweritem/draweritem';
import { verticalScale, scale, moderateScale } from '../../helper/scaling';
import { ScrollView } from 'react-native-gesture-handler';
import FavoriteIcon from '../../components/favoriteicon/favoriteIcon'


export default class itemDetailsScreen extends React.Component {


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
                
            </View>
        </SafeAreaView>
    )}};