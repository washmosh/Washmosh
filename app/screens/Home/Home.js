import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomeScreen extends Component {
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
            Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
            To get started, edit App.js
            </Text>
            <Text style={styles.instructions}>
            {instructions}
            </Text>
        </View>
        );
    }
}

HomeScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
};
  
module.exports = HomeScreen;
