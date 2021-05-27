import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
//import firebase from 'firebase'

export default class LogInScreen extends Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:""
        }
    }

    LogIn = async (email,password)=>{
        
    }

    render(){
        return(
            <View>
                <TextInput placeholder="Email" keyboardType="email-address"/>
                <TextInput placeholder="Password" secureTextEntry={true}/>
                <TouchableOpacity>
                    <Text>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("SignUpScreen")}}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}