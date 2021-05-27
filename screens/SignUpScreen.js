import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet, Alert} from 'react-native';
import firebase from "firebase";
import db from "../config";

export default class SignUpScreen extends Component{
    constructor(){
        super();
        this.state={
            emailId:"",
            firstName:"",
            lastName:"",
            password:"",
            confirmPassword:""
        }
    }

    userSignUp=(emailId,password,confirmPassword)=>{
        if (password !== confirmPassword){
            return Alert.alert("Password doesn't match. Try Again")
        }else{
            firebase
            .auth()
            .createUserWithEmailAndPassword(emailId,password)
            .then(()=>{
                db.collections('users').add({
                    "first_name":this.state.firstName,
                    "last_name":this.state.lastName,
                    "email_id":this.state.emailId
                })
            })
            .catch(error =>{
                var errorcode = error.code;
                var errormessage = error.message;
                return Alert.alert(errormessage)
            })
        }

    }

    render(){
        return(
            <View>
                <TouchableOpacity onPress={()=>{this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)}}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
                <Text>Sign Up Screen</Text>
            </View>
        )
    }
}