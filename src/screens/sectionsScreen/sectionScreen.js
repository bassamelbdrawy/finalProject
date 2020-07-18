
import React from 'react';
import{Text,SafeAreaView,View,TouchableOpacity,Image} from 'react-native';
import DepartmentIcon from '../../components/departmenticon/departmenIcon';
import styles from './sectionScreenStyle';
import strings from '../../localize/index';
import DrawerItem from '../../components/draweritem/draweritem';
import { verticalScale, scale } from '../../helper/scaling';

export default class sectionScreen extends React.Component {

  render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer()}}>
                    <Image style={styles.menuBottom}  source={require('../../assets/photos/More.png')}/>
                </TouchableOpacity>
                <Text>{strings.sections}</Text>
                <Image style={styles.cartBottom}  source={require('../../assets/photos/Cart.png')}/>
            </View>
            <View style={styles.sectionTitleView}>
                <Text style={styles.sectionTitle}>{strings.electronicsection}</Text>
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.section}>
                    <DepartmentIcon edit={{marginTop:verticalScale(-30)}} name={strings.electroics} image={require('../../assets/photos/Electronics.png')}/>
                    <DepartmentIcon edit={{marginTop:verticalScale(-30)}} name={strings.beauty} image={require('../../assets/photos/Beauty.png')}/>
                    <DepartmentIcon edit={{marginTop:verticalScale(-30)}} name={strings.beauty} image={require('../../assets/photos/Beauty.png')}/>
                </View>
                <View style={styles.insection}>
                    <DrawerItem outerContainerStyle={{width:scale(255),justifyContent:'center',marginRight:scale(10)}} text={strings.phones}/>
                    <DrawerItem outerContainerStyle={{width:scale(255),justifyContent:'center',marginRight:scale(10)}} text={strings.laptop}/>
                </View>
            </View>
           
        </SafeAreaView>
    )}};