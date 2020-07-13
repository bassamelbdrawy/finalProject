
import React from 'react';
import{Text,SafeAreaView} from 'react-native';

export default class sectionScreen extends React.Component {

  render() {
    return (
        <SafeAreaView style ={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{textAlign:'center'}}>section screen</Text>
            <Text onPress={()=>{this.props.navigation.navigate('homeScreen')}}>go to home screen</Text>
        </SafeAreaView>
    )}};