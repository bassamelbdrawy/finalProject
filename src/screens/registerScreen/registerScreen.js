
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
        username:'',
        email:'',
        city:'',
        password:'',
        rePassword:''
    }

    changeUserName=(text)=>{
        this.setState(()=>({username:text}))}

    changeEmail=(text)=>{
        this.setState(()=>({email:text}))}

    changeCity=(text)=>{
        this.setState(()=>({city:text}))}

    changePassword=(text)=>{
        this.setState(()=>({password:text}))}
    
    reChangePassword=(text)=>{
        this.setState(()=>({rePassword:text}))}

  render() {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={()=>{this.props.navigation.pop()}}>
                    <Image style={styles.menuBottom}  source={require('../../assets/photos/arr.png')}/>
            </TouchableOpacity>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.desc}>enter your information to create your account and browse it</Text>
            <View style={styles.barsView}>
            <View style={styles.username}>
                <Image style={styles.usernameIcon} source={require('../../assets/photos/Profile1.png')} />
                <View style={styles.usernameView}>
                    <Text style={styles.usernameText}>User Name</Text>
                    <TextInput
                    secureTextEntry={false}
                    style={styles.usernameInput}
                    value={this.state.username}
                    onChangeText={this.changeUserName}
                    placeholder="username"
                    />
                </View>
           </View>
           <View style={styles.regular}>
                <Image style={styles.regularIcon} source={require('../../assets/photos/at.png')} />
                <View style={styles.regularView}>
                    <Text style={styles.regularText}>Email Adress</Text>
                    <TextInput
                    secureTextEntry={false}
                    style={styles.regularInput}
                    value={this.state.email}
                    onChangeText={this.changeEmail}
                    placeholder="email"
                    />
                </View>
           </View>
           <View style={styles.regular}>
                <Image style={styles.regularIcon} source={require('../../assets/photos/location-pin.png')} />
                <View style={styles.regularView}>
                    <Text style={styles.regularText}>City</Text>
                    <TextInput
                    secureTextEntry={false}
                    style={styles.regularInput}
                    value={this.state.city}
                    onChangeText={this.changeCity}
                    placeholder="city"
                    />
                </View>
           </View>
           <View style={styles.regular}>
                <Image style={styles.regularIcon} source={require('../../assets/photos/002-password.png')} />
                <View style={styles.regularView}>
                    <Text style={styles.regularText}>Password</Text>
                    <TextInput
                    secureTextEntry
                    style={styles.regularInput}
                    value={this.state.password}
                    onChangeText={this.changePassword}
                    placeholder="password"
                    />
                </View>
           </View>
           <View style={styles.password}>
                <Image style={styles.regularIcon} source={require('../../assets/photos/002-password.png')} />
                <View style={styles.regularView}>
                    <Text style={styles.regularText}>Re enter Password</Text>
                    <TextInput
                    secureTextEntry
                    style={styles.regularInput}
                    value={this.state.rePassword}
                    onChangeText={this.reChangePassword}
                    placeholder="password again"
                    />
                </View>
           </View>
           <View  style={styles.register}>
              <LoginIcon text='Register'/>
           </View>
           </View>  
        </SafeAreaView>
    )}};