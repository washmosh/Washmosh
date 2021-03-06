import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

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
            <Text style={styles.welcome}>
            Login Page!
            </Text>
            <Text style={styles.instructions}>
            To get started, edit App.js
            </Text>
            <Text style={styles.instructions}>
            </Text>
        </View>
        );
    }
}

LoginScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
};
  
module.exports = LoginScreen;
