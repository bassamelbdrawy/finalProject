
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
        username:''
    }

    changeUserName=(text)=>{
        this.setState(()=>({username:text}))}

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
           </View>  
        </SafeAreaView>
    )}};