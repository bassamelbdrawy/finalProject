
import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image, ScrollView,FlatList} from 'react-native';
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

const departmentData =  [
  {"sectionName": "electronics", "sectionIcon": require("../../assets/photos/Electronics.png"), "sectionItems":[{"itemName":"phones"},{"itemName":"laptop"}]},
  {"sectionName": "beauty", "sectionIcon": require("../../assets/photos/Beauty.png"), "sectionItems":[{"itemName":"clothes"},{"itemName":"shoes"}]},
  {"sectionName": "sounds", "sectionIcon": require("../../assets/photos/Furniture.png"), "sectionItems":[{"itemName":"headphones"},{"itemName":"speakers"}]},
  {"sectionName": "beauty", "sectionIcon": require("../../assets/photos/Beauty.png"), "sectionItems":[{"itemName":"clothes"},{"itemName":"shoes"}]},
  {"sectionName": "sounds", "sectionIcon": require("../../assets/photos/Furniture.png"), "sectionItems":[{"itemName":"headphones"},{"itemName":"speakers"}]},
  {"sectionName": "beauty", "sectionIcon": require("../../assets/photos/Beauty.png"), "sectionItems":[{"itemName":"clothes"},{"itemName":"shoes"}]},
  {"sectionName": "electronics", "sectionIcon": require("../../assets/photos/Electronics.png"), "sectionItems":[{"itemName":"phones"},{"itemName":"laptop"}]},
  
]

const itemData =[
  {"productName":"product","categoryName":"category","itemIcon":require("../../assets/photos/Image13.png"),"price":"100 sr"},
  {"productName":"product","categoryName":"category","itemIcon":require("../../assets/photos/Image14.png"),"price":"100 sr"},
  {"productName":"product","categoryName":"category","itemIcon":require("../../assets/photos/Image15.png"),"price":"100 sr"},
  {"productName":"product","categoryName":"category","itemIcon":require("../../assets/photos/Image13.png"),"price":"100 sr"}
]

const sectionData =[
  {"productName":"product","categoryName":"category","itemIcon":require("../../assets/photos/1.png"),"price":"100 sr"},
  {"productName":"product","categoryName":"category","itemIcon":require("../../assets/photos/2.png"),"price":"100 sr"},
  {"productName":"product","categoryName":"category","itemIcon":require("../../assets/photos/3.png"),"price":"100 sr"},
  {"productName":"product","categoryName":"category","itemIcon":require("../../assets/photos/1.png"),"price":"100 sr"}
]

const storeData =[
  {"storeName":"store name","storeRate":"rate","itemIcon":require("../../assets/photos/photo.png")},
  {"storeName":"store name","storeRate":"rate","itemIcon":require("../../assets/photos/photo.png")},
  {"storeName":"store name","storeRate":"rate","itemIcon":require("../../assets/photos/photo.png")},
  {"storeName":"store name","storeRate":"rate","itemIcon":require("../../assets/photos/photo.png")}
]
  

export default class homeScreen extends React.Component {

renderDepartmentsItems=({item}) =>{
  return(
    <DepartmentIcon name = {item.sectionName} image = {item.sectionIcon} edit={{backgroundColor:'none'}} editImage={{tintColor:'none'}}/>
  )
}

renderItemItems=({item})=>{
  return(
    <ItemIcon product={item.productName} category={item.categoryName} price={item.price} image={item.itemIcon} />
  )
}

renderSectionItems=({item})=>{
  return(
    <ItemIcon product={item.productName} category={item.categoryName} price={item.price} image={item.itemIcon} />
  )
}

renderStoreItems=({item})=>{
  return(
    <StoreIcon  storeName={item.storeName} rate={item.storeRate} image={item.itemIcon}/>
  )
}


  render() {
    return (
      <SafeAreaView style ={{flex:1,backgroundColor:'#FFDD00'}}>
        <ScrollView style={styles.container} >
        <View style= {styles.nav}>
          <View style={styles.navIcons}>
            <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer()}}>
                <Image style={styles.menuBottom}  source={require('../../assets/photos/More.png')}/>
            </TouchableOpacity>
            <Image style={styles.logo}  source={require('../../assets/photos/Group161.png')}/>
            <Image style={styles.cartBottom}  source={require('../../assets/photos/Cart.png')}/>
          </View>
        </View>
        <View style={styles.departments}>
          <View style = {styles.ad}>
              <Image style={styles.adPhoto} source={require('../../assets/photos/Base.png')}/>
              <Text style={{textAlign:'left',marginTop:20,marginLeft:20,color:'white',fontSize:moderateScale(23)}}>{strings.adArea}</Text>
              <Text style={{textAlign:'left',marginLeft:20,color:'white',fontSize:moderateScale(19)}}>{strings.news}</Text>
              <Text style={{textAlign:'left',marginLeft:20,color:'white',fontSize:moderateScale(14)}}>{strings.here}</Text>
              <View style={{marginLeft:20,marginTop:90}}>
                <MoreIcon text={strings.more}/>
              </View>  
          </View>
          <FlatList
                    style={{marginTop:verticalScale(25),flex:1}}
                    contentContainerStyle={styles.departmentList}
                    numColumns={1}
                    horizontal
                    ItemSeparatorComponent={() => <View style={{width: scale(20)}}/>}
                    data={departmentData}
                    renderItem={this.renderDepartmentsItems}
                    showsHorizontalScrollIndicator={false}
                    />
        </View>
        <View style={styles.itemsContainer}>
           <View style={styles.itemsTitle}>
             <Text style={{fontSize:moderateScale(20),color:'#6954A3'}}>{strings.newArrivel}</Text>
             <MoreIcon text = {strings.more} />
           </View>
           <FlatList
                    style={styles.itemsList}
                    numColumns={1}
                    horizontal={true}
                    ItemSeparatorComponent={() => <View style={{width: scale(5)}}/>}
                    data={itemData}
                    renderItem={this.renderItemItems}
                    />
           <View style={styles.adImageView}>
             <Image style={styles.adImage} source={require('../../assets/photos/MaskGroup1.png')}/>
           </View>
        </View>
        <View style={styles.itemsContainer}>
           <View style={styles.itemsTitle}>
             <Text style={{fontSize:moderateScale(20),color:'#6954A3'}}>{strings.sectionName}</Text>
             <MoreIcon text = {strings.more} />
           </View>
           <FlatList
                    style={styles.itemsList}
                    numColumns={1}
                    horizontal={true}
                    ItemSeparatorComponent={() => <View style={{width: scale(5)}}/>}
                    data={sectionData}
                    renderItem={this.renderSectionItems}
                    showsHorizontalScrollIndicator={false}
                    />
           <View style={styles.adImageView}>
             <Image style={styles.adImage} source={require('../../assets/photos/4.png')}/>
             <View style={{height:verticalScale(10)}}/>
           </View>
        </View>
        <View style={styles.storeView}>
          <Text style={styles.storeText}> {strings.mostImportantStore}</Text>
          <FlatList
                    style={styles.storeList}
                    numColumns={1}
                    horizontal={true}
                    data={storeData}
                    renderItem={this.renderStoreItems}
                    showsHorizontalScrollIndicator={false}
                    />
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