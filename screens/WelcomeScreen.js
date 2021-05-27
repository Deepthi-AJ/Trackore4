import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

export default class WelcomeScreen extends Component{
    render(){
        return(
            <View>
                <Text style={styles.title}>Trackore</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('LogInScreen')}}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    title:{
        fontSize:40,
        fontWeight:"bold"
    }
})