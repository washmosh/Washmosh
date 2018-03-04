import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
//import { globals } from 'stores';
//import { images } from 'resources';
import styles from './styles';

const deviceWindow = Dimensions.get('window');

export default class LoginScreen extends Component {
    static navigatorStyle = {
        navBarHidden: true,
      };
    
      constructor(props) {
        super(props);
    
        this.state = {
          
        };
    
        //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
      }

    render() {
        return (
            <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding" style= {{marginTop: deviceWindow.height / 5, flex: 1, 
            justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.loginContainer}>
            <Image resizeMode="contain" style={styles.logo} source={require('../../resources/images/logo.png')} />
            </View>
        
        
            <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Telefon veya E-mail' //textler dil dosyasından gelmeli
               placeholderTextColor='rgba(0,0,0,0.7)'/>

            <TextInput style = {styles.input}   
                        returnKeyType="go" 
                        ref={(input)=> this.passwordInput = input} 
                        placeholder='Şifre' 
                        placeholderTextColor='rgba(0,0,0,0.7)' 
                        secureTextEntry/>

            <TouchableOpacity style={styles.buttonContainer}
            >
                                {/* onPress={onButtonPress}> */}
                        <Text  style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <Text 
                style = {styles.underlineText}
            >
                Şifremi Unuttum/Yeni Kayıt
            </Text>
        
        </KeyboardAvoidingView>
        </View>
        );
    }
}

LoginScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
};
  
module.exports = LoginScreen;
