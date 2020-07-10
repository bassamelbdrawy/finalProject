
import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image, ScrollView} from 'react-native';
import styles from './homeScreenStyle';
import DepartmentIcon from '../../components/departmenticon/departmenIcon';
import MoreIcon from '../../components/moreicon/moreIcon';
import ItemIcon from '../../components/itemicon/itemIcon';
import StoreIcon from '../../components/storeicon/storeIcon';
import strings from '../../localize';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';
import {switchLang} from '../../helper/switchLang';


if (I18nManager.isRTL) {
  strings.setLanguage('ar')
} else {
  strings.setLanguage('en')
}

export default class homeScreen extends React.Component {

  render() {
    return (
      <SafeAreaView style ={{flex:1,backgroundColor:'#FFDD00'}}>
        <ScrollView style={styles.container} >
        <View style= {styles.nav}>
          <View style={styles.navIcons}>
            <Image style={styles.menuBottom}  source={require('../../assets/photos/More.png')}/>
            <Image style={styles.logo}  source={require('../../assets/photos/Group161.png')}/>
            <Image style={styles.cartBottom}  source={require('../../assets/photos/Cart.png')}/>
          </View>
        </View>
        <View style={styles.departments}>
          <View style = {styles.ad}>
              <Image style={styles.adPhoto} source={require('../../assets/photos/Base.png')}/>
              <Text style={{textAlign:'left',marginTop:20,marginLeft:20,color:'white'}}>{strings.adArea}</Text>
              <Text style={{textAlign:'left',marginLeft:20,color:'white'}}>{strings.news}</Text>
              <Text style={{textAlign:'left',marginLeft:20,color:'white'}}>{strings.here}</Text>
              <View style={{marginLeft:20,marginTop:90}}>
                <MoreIcon text={strings.more}/>
              </View>  
          </View>
          <View style={styles.departmentList}>
            <DepartmentIcon name = {strings.electroics} image = {require('../../assets/photos/Electronics.png')} />
            <DepartmentIcon name = {strings.beauty} image = {require('../../assets/photos/Beauty.png')} />
            <DepartmentIcon name = {strings.furniture} image = {require('../../assets/photos/Furniture.png')} />
            <DepartmentIcon name = {strings.shoes} image = {require('../../assets/photos/Shoes.png')} />
          </View>
        </View>
        <View style={styles.itemsContainer}>
           <View style={styles.itemsTitle}>
             <Text>{strings.newArrivel}</Text>
             <MoreIcon text = {strings.more} />
           </View>
           <View style={styles.itemsList}>
             <ItemIcon product ={strings.product}  category= {strings.category} price={strings.sr100} image={require('../../assets/photos/Image13.png')}/>
             <ItemIcon product ={strings.product}  category= {strings.category} price={strings.sr100} image={require('../../assets/photos/Image14.png')}/>
             <ItemIcon product ={strings.product}  category= {strings.category} price={strings.sr100} image={require('../../assets/photos/Image15.png')}/>
            </View>
           <View style={styles.adImageView}>
             <Image style={styles.adImage} source={require('../../assets/photos/MaskGroup1.png')}/>
           </View>
        </View>
        <View style={styles.itemsContainer}>
           <View style={styles.itemsTitle}>
             <Text>{strings.sectionName}</Text>
             <MoreIcon text = {strings.more} />
           </View>
           <View style={styles.itemsList}>
             <ItemIcon product ={strings.product}  category= {strings.category} price={strings.sr100} image={require('../../assets/photos/1.png')}/>
             <ItemIcon product ={strings.product}  category= {strings.category} price={strings.sr100} image={require('../../assets/photos/2.png')}/>
             <ItemIcon product ={strings.product}  category= {strings.category} price={strings.sr100} image={require('../../assets/photos/3.png')}/>
            </View>
           <View style={styles.adImageView}>
             <Image style={styles.adImage} source={require('../../assets/photos/4.png')}/>
           </View>
        </View>
        <View style={styles.storeView}>
          <Text style={styles.storeText}> {strings.mostImportantStore}</Text>
          <View style={styles.storeList}>
          <StoreIcon image={require('../../assets/photos/photo.png')} storeName={strings.storeName} rate={strings.rate} />
          <StoreIcon image={require('../../assets/photos/photo.png')} storeName={strings.storeName} rate={strings.rate} />
          <StoreIcon image={require('../../assets/photos/photo.png')} storeName={strings.storeName} rate={strings.rate} />
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