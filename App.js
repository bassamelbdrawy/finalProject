
import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image, ScrollView} from 'react-native';
import styles from './src/screens/homeScreen/homeScreenStyle';
import DepartmentIcon from './src/components/departmenIcon';
import MoreIcon from './src/components/moreIcon';
import ItemIcon from './src/components/itemIcon';
import StoreIcon from './src/components/storeIcon';
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
      <SafeAreaView style ={{flex:1,backgroundColor:'#FFDD00'}}>
        <ScrollView style={styles.container} >
        <View style= {styles.nav}>
          <View style={styles.navIcons}>
            <Image style={styles.menuBottom}  source={require('./src/assets/photos/More.png')}/>
            <Image style={styles.logo}  source={require('./src/assets/photos/Group161.png')}/>
            <Image style={styles.cartBottom}  source={require('./src/assets/photos/Cart.png')}/>
          </View>
        </View>
        <View style={styles.departments}>
          <View style = {styles.ad}>
              <Image style={styles.adPhoto} source={require('./src/assets/photos/Base.png')}/>
              <Text style={{textAlign:'left',marginTop:20,marginLeft:20,color:'white'}}>{strings.adArea}</Text>
              <Text style={{textAlign:'left',marginLeft:20,color:'white'}}>{strings.news}</Text>
              <Text style={{textAlign:'left',marginLeft:20,color:'white'}}>{strings.here}</Text>
              <View style={{marginLeft:20,marginTop:90}}>
                <MoreIcon text={strings.more}/>
              </View>  
          </View>
          <View style={styles.departmentList}>
            <DepartmentIcon name = {strings.electroics} image = {require('./src/assets/photos/Electronics.png')} />
            <DepartmentIcon name = {strings.beauty} image = {require('./src/assets/photos/Beauty.png')} />
            <DepartmentIcon name = {strings.furniture} image = {require('./src/assets/photos/Furniture.png')} />
            <DepartmentIcon name = {strings.shoes} image = {require('./src/assets/photos/Shoes.png')} />
          </View>
        </View>
        <View style={styles.itemsContainer}>
           <View style={styles.itemsTitle}>
             <Text>{strings.newArrivel}</Text>
             <MoreIcon text = {strings.more} />
           </View>
           <View style={styles.itemsList}>
             <ItemIcon product ={strings.product}  category= {strings.category} price={strings.sr100} image={require('./src/assets/photos/Image13.png')}/>
             <ItemIcon product ={strings.product}  category= {strings.category} price={strings.sr100} image={require('./src/assets/photos/Image14.png')}/>
             <ItemIcon product ={strings.product}  category= {strings.category} price={strings.sr100} image={require('./src/assets/photos/Image15.png')}/>
            </View>
           <View style={styles.adImageView}>
             <Image style={styles.adImage} source={require('./src/assets/photos/MaskGroup1.png')}/>
           </View>
        </View>
        <View style={styles.itemsContainer}>
           <View style={styles.itemsTitle}>
             <Text>{strings.sectionName}</Text>
             <MoreIcon text = {strings.more} />
           </View>
           <View style={styles.itemsList}>
             <ItemIcon product ={strings.product}  category= {strings.category} price={strings.sr100} image={require('./src/assets/photos/1.png')}/>
             <ItemIcon product ={strings.product}  category= {strings.category} price={strings.sr100} image={require('./src/assets/photos/2.png')}/>
             <ItemIcon product ={strings.product}  category= {strings.category} price={strings.sr100} image={require('./src/assets/photos/3.png')}/>
            </View>
           <View style={styles.adImageView}>
             <Image style={styles.adImage} source={require('./src/assets/photos/4.png')}/>
           </View>
        </View>
        <View style={styles.storeView}>
          <Text style={styles.storeText}> {strings.mostImportantStore}</Text>
          <View style={styles.storeList}>
          <StoreIcon image={require('./src/assets/photos/photo.png')} storeName={strings.storeName} rate={strings.rate} />
          <StoreIcon image={require('./src/assets/photos/photo.png')} storeName={strings.storeName} rate={strings.rate} />
          <StoreIcon image={require('./src/assets/photos/photo.png')} storeName={strings.storeName} rate={strings.rate} />
          </View>
        </View>
      
     
    

  
    <View style={styles.container}>
          <Text style={{marginLeft:scale(10), textAlign:'left'}}>{strings.helloWorld}</Text>
          <TouchableOpacity onPress={switchLang}>
          <Text style={{marginLeft:10, textAlign:'left'}}>{strings.clickHere}</Text>
          </TouchableOpacity>
    </View>
    </ScrollView>
    </SafeAreaView>

    )}};