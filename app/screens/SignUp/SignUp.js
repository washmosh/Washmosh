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
import { Hoshi } from 'react-native-textinput-effects';
import { globals } from '../../stores';
import { colors, images } from '../../resources';
import styles from './styles';

const deviceWindow = Dimensions.get('window');

export default class SignupScreen extends Component {
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
            <KeyboardAvoidingView behavior="padding" style= {{flex: 1, 
            justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 25}}
                >Aşağıdaki alanları doldurunuz.
            </Text>
            {/* <TextInput style = {styles.input} 
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

            <TextInput style = {styles.input}   
                        returnKeyType="go" 
                        ref={(input)=> this.passwordInput = input} 
                        placeholder='Şifre' 
                        placeholderTextColor='rgba(0,0,0,0.7)' 
                        secureTextEntry/>

            <TextInput style = {styles.input}   
                        returnKeyType="go" 
                        ref={(input)=> this.passwordInput = input} 
                        placeholder='Şifre' 
                        placeholderTextColor='rgba(0,0,0,0.7)' 
                        secureTextEntry/>

            <TextInput style = {styles.input}   
                        returnKeyType="go" 
                        ref={(input)=> this.passwordInput = input} 
                        placeholder='Şifre' 
                        placeholderTextColor='rgba(0,0,0,0.7)' 
                        secureTextEntry/> */}

            <Hoshi
              style={styles.input}
              label={'İsim-Soyisim'}
              labelStyle={styles.kaedeLabel}
              inputStyle={styles.hoshiInput}
              borderColor={colors.bluebox}
              /* value={this.state.identificationNumber}
              onChangeText={(text) => {
                this.setState({ identificationNumber: text });
              }} */
            />
            <Hoshi
              style={styles.input}
              label={'Telefon Numarası'}
              labelStyle={styles.kaedeLabel}
              inputStyle={styles.hoshiInput}
              borderColor={colors.bluebox}
              keyboardType="numeric"
              /* value={this.state.name}
              onChangeText={(text) => {
                this.setState({ name: text });
              }} */
            />
            <Hoshi
              //ref='surname'
              //onFocus={ this.inputFocused.bind(this, 'surname') }
              ref={(r) => { this._textInputRef = r; }}
              style={styles.input}
              label={'E-mail'}//t.getTrans('surname')
              labelStyle={styles.kaedeLabel}
              inputStyle={styles.hoshiInput}
              borderColor={colors.bluebox}
              /* value={this.state.surname}
              onChangeText={(text) => {
                this.setState({ surname: text });
              }} */
            />
            <Hoshi
              //ref='telephone'
              //onFocus={ this.inputFocused.bind(this, 'telephone') }
              ref={(r) => { this._textInputRef = r; }}
              style={styles.input}
              label={'Kullanıcı Adı'}
              labelStyle={styles.kaedeLabel}
              inputStyle={styles.hoshiInput}
              borderColor={colors.bluebox}
              /* value={this.state.telephone}
              onChangeText={(text) => {
                this.setState({ telephone: text });
              }} */
            />
            <TouchableOpacity style={styles.buttonContainer}
            >
                                {/* onPress={onButtonPress}> */}
                        <Text  style={styles.buttonText}>Kaydet</Text>
            </TouchableOpacity>
        
        </KeyboardAvoidingView>
        </View>
        );
    }
}

SignupScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
};
  
module.exports = SignupScreen;
