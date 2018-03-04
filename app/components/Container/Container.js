import React, { Component } from 'react';
import {
  Platform,
  View,
  Image,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class Container extends Component {
  render() {
    if (Platform.OS === 'ios') {
      return (
        <View behavior="padding" style={{ flex: 1 }}>

          <View style={{ flex: 1 }} {...this.props} onPress={() => Keyboard.dismiss()}>
            {this.props.bgSource
              ? <Image style={styles.backgroundStyle} source={this.props.bgSource} />
              : <View />}

            {this.props.children}

          </View>

          {this.props.loading
            ? <View style={styles.loadingStyle}>
              <ActivityIndicator size="large" color="#FFF" />
            </View>
            : <View />}
        </View>
      );
    }
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>

        <View style={{ flex: 1 }} {...this.props}>
          {this.props.bgSource
            ? <Image style={styles.backgroundStyle} source={this.props.bgSource} />
            : <View />}

          {this.props.children}

        </View>

        {this.props.loading
          ? <View style={styles.loadingStyle}>
            <ActivityIndicator size="large" color="#FFF" />
          </View>
          : <View />}

      </KeyboardAvoidingView>
    );
  }
}

Container.propTypes = {
  bgSource: PropTypes.node,
  children: PropTypes.node,
  loading: PropTypes.bool,
};

Container.defaultProps = {
  bgSource: null,
  children: null,
  loading: null,
};

module.exports = Container;
