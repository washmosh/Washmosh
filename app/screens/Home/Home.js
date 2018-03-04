import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header }  from '../../components';
import styles from './styles';

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
        <Container loading={false}>
            <Header
              //leftIcon={glypy.iconmenu}
              //rightIcon={glypy.iconinfo}
              //logo={images.logo}
              //onLeftIconPress={() => this.menuAction('left')}
              //onRightIconPress={() => this.menuAction('right')}
            />
        </Container>
        );
    }
}

HomeScreen.propTypes = {
    navigator: PropTypes.object.isRequired,
};
  
module.exports = HomeScreen;
