import React, { Component } from 'react';
//import { observer } from 'mobx-react/native';
import { View, Keyboard, ScrollView, Button } from 'react-native';
//import { Alert } from 'lib';
import PropTypes from 'prop-types';
//import { loginService } from 'services';
//import { users } from 'stores';
import { translation, constants } from '../../../resources';
import { Header } from '../../../components';
import styles from './styles';

export default class ForgotPasswordScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };
  constructor(props) {
    super(props);
    this.state = {
      /* buttonDisabled: true,
      prefix: '00',
      countryCode:
      users.getUserCountryCode() !== ''
        ? users.getUserCountryCode()
        : constants.dialCode,
      selectedIndex: this.props.selectedIndex,
      phoneNumber: '', */
    };
    this.handleIndexChange = this.handleIndexChange.bind(this);
  }
  componentDidMount() {
    //this.focusInput();
  }
  focusInput() {
    /* setTimeout(() => {
      this.phoneNumberField.focus();
    }, 600); */
  }
  /* goHomePress() {
    this.props.navigator.popToRoot({
      animated: true,
    });
  }
  checkLoginSMS() {
    // const phone = this.state.countryCode + phoneNumber;
    const phone = '0' + this.state.phoneNumber;
    loginService(phone)
    .then((response) => {
      console.log('response', response);
      if (response.data.result.code === 0) {
        this.props.navigator.push({
          animated: false,
          screen: 'LoginSMSOnayScreen',
          passProps: {
            refNo: response.data.refNo,
            refCode: response.data.code,
            phoneNo: this.state.phoneNumber,
          },
        });
      } else {
        Alert.showMessage('INFO', response.data.result.message);
      }
    })
    .catch((error) => {
      console.log('error.response', error.response);
      Alert.showMessage('ERROR', error.response.data.error.message);
    });
  }
  checkLoginEMail() {
    console.log('içerde');
  }
  handleScroll(event) {
    Keyboard.dismiss();
  }
  async handleIndexChange(index) {
    await Keyboard.dismiss();
    await this.setState({
      ...this.state,
      selectedIndex: index,
    });
    switch (index) {
      case 0:
        this.phoneNumberField.focus();
        break;
      case 1:
        this.eMailField.focus();
        break;
      default:
    }
  } */
  /* renderPinForgot() {
    return (
      <View>
        <Text
          translation="LOGIN_DESCRIPTION"
          color="COLOR_TEXT_BLACK"
          fontSize={14}
          fontWeight="semibold"
          style={styles.descriptionText}
        />
        <PhoneTextInput
          ref={ref => {
            this.phoneNumberField = ref;
          }}
          selectedCountryCode={countryCode => {
            this.setState({ countryCode });
          }}
          value={this.state.phoneNumber}
          onChangeText={(value) => {
            this.setState({ phoneNumber: value });
            if (value.length === 13) {
              Keyboard.dismiss();
            }
            if (value.length > 7) {
              this.setState({ buttonDisabled: false });
            } else {
              this.setState({ buttonDisabled: true });
            }
          }}
        />
        <Button
          disabled={this.state.buttonDisabled}
          translation="continue"
          style={styles.buttonStyle}
          customize
          onPress={() => this.checkLoginSMS()}
        />
      </View>
    );
  } */
  /* renderEMailForgot() {
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        keyboardShouldPersistTaps={'handled'}
        onScroll={this.handleScroll}
      >
        <Text
          translation="MAIL_DESCRIPTION"
          color="COLOR_TEXT_BLACK"
          fontSize={14}
          fontWeight="semibold"
          style={styles.descriptionText}
        />
        <InputComponent
          ref={ref => {
            this.eMailField = ref;
          }}
          contentType="EMAIL"
          placeholderText="MAIL_LOGIN_PLACEHOLDER"
        />
        <GreenButton
          disabled={this.state.buttonDisabled}
          translation="continue"
          style={styles.buttonStyle}
          customize
          onPress={() => this.checkLoginEMail()}
        />
      </ScrollView>
    );
  } */
  render() {
    return (
      <View style={styles.container}>
       {/*  <Header
          backgroundImage="headerBackground"
          leftButtonIcon="icon_left_arrow"
          centerButtonText="LOGIN_SUBTITLE"
          onLeftButtonPress={() => this.goHomePress()}
        /> */}
        <Header
              //leftIcon={glypy.iconmenu}
              //rightIcon={glypy.iconinfo}
              //logo={images.logo}
              //onLeftIconPress={() => this.menuAction('left')}
              //onRightIconPress={() => this.menuAction('right')}
        />
        <View style={{ flex: 1 }}>
          {/* <Divider isBackground style={styles.dividerStyle} height={4} />
          {this.renderPinForgot()} */}
          {/* <SegmentedControlTab
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            activeTabTextStyle={styles.activeTabTextStyle}
            tabTextStyle={styles.tabTextStyle}
            borderRadius={20}
            values={[
              `${translation.t('LOGIN_SUBTITLE_PIN')}`,
              `${translation.t('MAIL_LOGIN_SUBTITLE_PIN')}`,
            ]}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
          />
          <Divider isBackground style={styles.dividerStyle} height={4} />
          <View style={styles.activeTabContainer}>
            {this.state.selectedIndex === 0
              ? this.renderPinForgot()
              : this.renderEMailForgot()}
          </View> */}
        </View>
      </View>
    );
  }
}
ForgotPasswordScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
};
module.exports = ForgotPasswordScreen;
