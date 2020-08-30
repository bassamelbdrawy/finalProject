
import React from 'react';
import{Text,SafeAreaView,View,TouchableOpacity,Image,FlatList} from 'react-native';
import DepartmentIcon from '../../components/departmenticon/departmenIcon';
import styles from './registerScreenStyle';
import strings from '../../localize/index';
import DrawerItem from '../../components/draweritem/draweritem';
import { verticalScale, scale, moderateScale } from '../../helper/scaling';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import FavoriteIcon from '../../components/favoriteicon/favoriteIcon'
import LoginIcon from '../../components/loginIcon/loginIcon';


export default class registerScreen extends React.Component {

    state={
        email:'',
        password:''
    }

    changeEmail=(text)=>{
        this.setState(()=>({email:text}))
    }

    changePassword=(text)=>{
        this.setState(()=>({password:text}))
    }

  render() {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={()=>{this.props.navigation.pop()}}>
                    <Image style={styles.menuBottom}  source={require('../../assets/photos/arr.png')}/>
            </TouchableOpacity>
           <Image style={styles.logo} source={require('../../assets/photos/Group161.png')}/>
           <View style={styles.email}>
                <Image style={styles.emailIcon} source={require('../../assets/photos/at.png')} />
                <View style={styles.emailView}>
                    <Text style={styles.emailText}>Email Adress</Text>
                    <TextInput
                    secureTextEntry={false}
                    style={styles.emailInput}
                    value={this.state.email}
                    onChangeText={this.changeEmail}
                    placeholder="email"
                    />
                </View>
           </View>
           <View style={styles.password}>
           <Image style={styles.emailIcon} source={require('../../assets/photos/002-password.png')} />
                <View style={styles.emailView}>
                    <Text style={styles.emailText}>Password</Text>
                    <TextInput
                    secureTextEntry={true}
                    style={styles.emailInput}
                    value={this.state.password}
                    onChangeText={this.changePassword}
                    placeholder="password"
                    />
                </View>
           </View>
           <View  style={styles.login}>
              <LoginIcon text='register'/>
           </View>
           <TouchableOpacity>
               <Text style={styles.forget}>Forget Password?</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('registerScreen')}}>
               <Text style={styles.register}>Register</Text>
           </TouchableOpacity>
        </SafeAreaView>
    )}};