
import React from 'react';
import{Text,SafeAreaView} from 'react-native';

export default class favoriteScreen extends React.Component {

  render() {
    return (
        <SafeAreaView style ={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Text style={{textAlign:'center'}}>favorite screen</Text>
            <Text onPress={()=>{this.props.navigation.navigate('homeScreen')}}>go to home screen</Text>
        </SafeAreaView>
    )}};