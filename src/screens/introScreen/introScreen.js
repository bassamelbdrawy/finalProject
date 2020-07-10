
import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image} from 'react-native';
import styles from './introScreenStyle';



export default class introScreen extends React.Component {

  componentDidMount=()=>{
    setTimeout(() => {
      this.props.navigation.navigate('homeScreen')
      }, 5000);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          <Image style={styles.logo}  source={require('../../assets/photos/Group161.png')}/>
          <Image style={styles.icon}  source={require('../../assets/photos/Group190.png')}/>
      </SafeAreaView>
    )}};

  