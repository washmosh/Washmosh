import React, { Component } from 'react';
import { observer } from 'mobx-react/native';
import { View, Alert, Keyboard, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
//import { pinChange } from 'services';
//import { translation } from 'resources';
import {
  Container,
  Header,
  //Text,
  //InputComponent,
  //GreenButton,
} from '../../../components';
import styles from './styles';

const deviceWindow = Dimensions.get('window');

let pin = '';
let rePin = '';

export default class LoginChangePasswordScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      buttonDisabled: true,
    };
  }

  componentDidMount() {
    //this.focusInput();
  }

  /* focusInput() {
    setTimeout(() => {
      this.passwordField.focus();
    }, 400);
  }

  menuAction() {
    this.props.navigator.pop({
      side: 'left',
      animated: true,
    });
  }

  goToScreen(screenName) {
    this.props.navigator.popToRoot({
      animated: true,
    });
    this.props.navigator.push({
      screen: screenName,
      animated: true,
      passProps: {},
    });
  }

  checkLoginWithPin() {
    if (pin.length === 6 && rePin.length === 6) {
      if (pin === rePin) {
        pinChange(pin)
          .then((pinResponse) => {
            if (pinResponse.data.result.code === 0) {
             
              this.goToScreen('ProfileDetailScreen');
            } else {
               Alert.alert(
                translation.t('INFO'),
                pinResponse.data.result.message,
                [{ text: translation.t('CLOSE'), onPress: () => console.log('Close Event') }],
                { cancelable: false },
              ); 
            }
          })
          .catch((error) => {
             Alert.alert(
              translation.t('ERROR'),
              error,
              [{ text: translation.t('CLOSE'), onPress: () => console.log('Close Event') }],
              { cancelable: false },
            ); 
          });
      } else {
         Alert.alert(
          translation.t('ERROR'),
          translation.t('PWD_PASSWORD_MISMATCH'),
          [{ text: translation.t('CLOSE'), onPress: () => console.log('PWD_PASSWORD_MISMATCH') }],
          { cancelable: false },
        ); 
      }
    } else {
       Alert.alert(
        translation.t('ERROR'),
        translation.t('PWD_PASSWORD_MUST_SIX_DIGIT'),
        [
          {
            text: translation.t('CLOSE'),
            onPress: () => console.log('PWD_PASSWORD_MUST_SIX_DIGIT'),
          },
        ],
        { cancelable: false },
      ); 
    }
  } */
  goHomePress() {
    this.props.navigator.popToRoot({
      animated: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Header
          backgroundImage="headerBackground"
          // leftButtonIcon="icon_left_arrow"
          centerButtonText="PWD_SET_PASSWORD"
          onLeftButtonPress={() => this.goHomePress()}
        /> */}
        <Header
              //leftIcon={glypy.iconmenu}
              //rightIcon={glypy.iconinfo}
              //logo={images.logo}
              //onLeftIconPress={() => this.menuAction('left')}
              //onRightIconPress={() => this.menuAction('right')}
        />
        <ScrollView style={{marginTop: deviceWindow.height / 14, flex: 1}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{marginBottom:50, fontSize: 17, alignItems: 'center', justifyContent: 'center'}}
          >Şifrenizi değiştirmek için alanları doldurunuz.
        </Text>

        <TextInput style = {styles.input} 
               autoCapitalize="none" 
               //onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Eski Şifre' //textler dil dosyasından gelmeli
               placeholderTextColor='rgba(0,0,0,0.7)'/>

            <TextInput style = {styles.input}   
                        returnKeyType="go" 
                        //ref={(input)=> this.passwordInput = input} 
                        placeholder='Yeni Şifre' 
                        placeholderTextColor='rgba(0,0,0,0.7)' 
                        secureTextEntry/>

            <TextInput style = {styles.input}   
                        returnKeyType="go" 
                        //ref={(input)=> this.passwordInput = input} 
                        placeholder='Yeni Şifre (Tekrar)' 
                        placeholderTextColor='rgba(0,0,0,0.7)' 
                        secureTextEntry/>

            <TouchableOpacity style={styles.buttonContainer}
            >
                                {/* onPress={onButtonPress}> */}
                        <Text>Onayla</Text>
            </TouchableOpacity>
        {/* <Text
          translation="PWD_SET_PASSWORD"
          color="COLOR_TEXT_SUBHEADER"
          fontSize={18}
          style={{ padding: 20 }}
          fontWeight="normal"
        /> */}
        {/* <Text
          translation="PWD_SET_PASSWORD_TEXT"
          color="COLOR_TEXT_BLACK"
          fontSize={15}
          style={styles.descriptionText}
          fontWeight="bold"
        /> */}
        {/* <InputComponent
          ref={(inputRef) => {
            this.passwordField = inputRef;
          }}
          contentType="CHANGEPASSWORD"
          placeholderText="PWD_NEW_PASSWORD"
          secureTextEntry="true"
          maxLength={6}
          onChangeText={(text) => {
            pin = text;
            if (pin.length === 6) {
              Keyboard.dismiss();
              setTimeout(() => {
                this.confirmPasswordField.focus();
              }, 300);
            }
            if (pin.length === 6 && rePin.length === 6) {
              this.setState({ buttonDisabled: false });
            } else {
              this.setState({ buttonDisabled: true });
            }
          }}
        />
        <InputComponent
          ref={(inputRef) => {
            this.confirmPasswordField = inputRef;
          }}
          contentType="CHANGEPASSWORD"
          placeholderText="PWD_CONFIRM_PASSWORD"
          secureTextEntry="true"
          maxLength={6}
          onChangeText={(text) => {
            rePin = text;
            if (rePin.length === 6) {
              Keyboard.dismiss();
            }
            if (pin.length === 6 && rePin.length === 6) {
              this.setState({ buttonDisabled: false });
            } else {
              this.setState({ buttonDisabled: true });
            }
          }}
        />
        <GreenButton
          disabled={this.state.buttonDisabled}
          translation="PROFILE_UPDATE"
          style={styles.buttonStyle}
          customize
          onPress={() => this.checkLoginWithPin()}
        /> */}
        </View>
        </ScrollView>
      </View>
    );
  }
}

LoginChangePasswordScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
};

module.exports = LoginChangePasswordScreen;
