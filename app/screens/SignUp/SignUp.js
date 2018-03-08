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
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';
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
          progress: 0.25,
          step: 0,
        };
    
        //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
      }

   /*  gotoScreen(screenName) {
      this.props.navigator.push({
        screen: screenName,
        animated: true,
        passProps: {
          whereis: 'SignupScreen',
        },
      });
    } */

    addProgress(){
      this.setState({ step : this.state.step + 1});
      this.setState({ progress: this.state.progress + 0.25});
    }

    render() {
        return (
            <View style={styles.container}>
            <Progress.Bar progress={this.state.progress} width={300} style={{marginTop: 100}} />
            
            <KeyboardAwareScrollView>
            {this.state.step === 0 ? 
              <View style= {{flex: 1, marginTop: 30, 
                justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 25}}
                    >Kayıt olmak için ilk bilgiler.
                </Text>
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
                <TouchableOpacity 
                  style={styles.buttonContainer}
                  onPress={this.addProgress.bind(this)}
                >                  
                  <Text  style={styles.buttonText}>Kaydet</Text>
                </TouchableOpacity>
              </View>
            : this.state.step === 1 ?
            <View style= {{flex: 1, marginTop: 30, 
              justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 25, marginBottom: 30}}
                  >Şifre Belirlemelisiniz.
              </Text>

              <TextInput style = {styles.passwrdinput} 
                    autoCapitalize="none" 
                    //onSubmitEditing={() => this.passwordInput.focus()} 
                    autoCorrect={false} 
                    keyboardType='email-address' 
                    returnKeyType="next" 
                    placeholder='Şifre' //textler dil dosyasından gelmeli
                    placeholderTextColor='rgba(0,0,0,0.7)'/>

                  <TextInput style = {styles.passwrdinput}   
                              returnKeyType="go" 
                              //ref={(input)=> this.passwordInput = input} 
                              placeholder='Yeni Şifre (Tekrar)' 
                              placeholderTextColor='rgba(0,0,0,0.7)' 
                              secureTextEntry/>

                  <TouchableOpacity 
                    style={styles.passwrdButtonContainer}
                    onPress={this.addProgress.bind(this)}
                  >
                              <Text>Onayla</Text>
                  </TouchableOpacity>
              </View>
            
              :
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{marginBottom:50, fontSize: 17, alignItems: 'center', justifyContent: 'center'}}
                >Şifrenizi Belirleyiniz.
              </Text>

              <TextInput style = {styles.passwrdinput} 
                    autoCapitalize="none" 
                    //onSubmitEditing={() => this.passwordInput.focus()} 
                    autoCorrect={false} 
                    keyboardType='email-address' 
                    returnKeyType="next" 
                    placeholder='Eski Şifre' //textler dil dosyasından gelmeli
                    placeholderTextColor='rgba(0,0,0,0.7)'/>

                  <TextInput style = {styles.passwrdinput}   
                              returnKeyType="go" 
                              //ref={(input)=> this.passwordInput = input} 
                              placeholder='Şifre (Tekrar)' 
                              placeholderTextColor='rgba(0,0,0,0.7)' 
                              secureTextEntry/>

                  <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={this.addProgress.bind(this)}
                  >
                              <Text>Onayla</Text>
                  </TouchableOpacity>
            
              </View>
            }
            </KeyboardAwareScrollView>
        </View>
        );
    }
}

SignupScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
};
  
module.exports = SignupScreen;
