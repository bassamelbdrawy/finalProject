
import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image} from 'react-native';
import styles from './src/screens/homeScreen/homeScreenStyle';
import DepartmentIcon from './src/components/departmenIcon';
import strings from './src/localize';
import {scale,verticalScale,moderateScale} from './src/helper/scaling';
import {switchLang} from './src/helper/switchLang';


if (I18nManager.isRTL) {
  strings.setLanguage('ar')
} else {
  strings.setLanguage('en')
}

export default class App extends React.Component {

  render() {
    return (
      <SafeAreaView style ={styles.container}>
        <View style= {styles.nav}>
          <View style={styles.navIcons}>
            <Image style={styles.menuBottom}  source={require('./src/assets/photos/More.png')}/>
            <Image style={styles.logo}  source={require('./src/assets/photos/Group161.png')}/>
            <Image style={styles.cartBottom}  source={require('./src/assets/photos/Cart.png')}/>
            
          </View>
          
        </View>
        <View style={styles.departments}>
          <View style = {styles.ad}>
          </View>
          <View style={styles.departmentList}>
            <DepartmentIcon name = {strings.electroics} image = {require('./src/assets/photos/Electronics.png')} />
            <DepartmentIcon name = {strings.beauty} image = {require('./src/assets/photos/Beauty.png')} />
            <DepartmentIcon name = {strings.furniture} image = {require('./src/assets/photos/Furniture.png')} />
            <DepartmentIcon name = {strings.shoes} image = {require('./src/assets/photos/Shoes.png')} />
          </View>
        </View>
      </SafeAreaView>
     
    )}};

  
    //<View style={styles.container}>
          //<Text style={{marginLeft:scale(10), textAlign:'left'}}>{strings.helloWorld}</Text>
          //<TouchableOpacity onPress={switchLang}>
          //<Text style={{marginLeft:10, textAlign:'left'}}>{strings.clickHere}</Text>
          //</TouchableOpacity>
    //</View>