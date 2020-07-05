
import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image} from 'react-native';
import strings from '../../localize';
import {scale,verticalScale,moderateScale} from '../../helper/scaling';
import {switchLang} from '../../helper/switchLang';
import styles from './introScreenStyle';


if (I18nManager.isRTL) {
  strings.setLanguage('ar')
} else {
  strings.setLanguage('en')
}

export default class introScreen extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
          <Text style={{marginLeft:scale(10), textAlign:'left'}}>{strings.helloWorld}</Text>
          <TouchableOpacity onPress={switchLang}>
          <Text style={{marginLeft:10, textAlign:'left'}}>{strings.clickHere}</Text>
          <Image style={styles.logo}  source={require('../../assets/photos/Group161.png')}/>
          <Image style={styles.icon}  source={require('../../assets/photos/Group190.png')}/>
          </TouchableOpacity>
      </SafeAreaView>
    )}};

  