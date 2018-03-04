import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Platform } from 'react-native';
import ScalableText from 'react-native-text';
import { constants } from '../../resources';
import PropTypes from 'prop-types';
//import { PureIcon } from '../../lib';
import styles from './styles';

//const { Icon } = PureIcon;

class Header extends Component {
  constructor(props) {
    super(props);

    this.backgroundColor = this.props.backgroundColor
      ? this.props.backgroundColor
      : constants.headerColor;

    if (this.props.leftIcon) {
      this.leftIcon = this.props.leftIcon;
    } else if (this.props.menu) {
      this.leftIcon = this.props.leftIcon || constants.menuIcon;
    }
  }

  render() {
    return (
      <View style={styles.topBarContainer} {...this.props} backgroundColor={this.backgroundColor}>

        {Platform.OS === 'ios' ? <View style={styles.statusBar} /> : null}

        <View style={styles.topBar}>

         {/*  <TouchableOpacity style={styles.leftIcon} onPress={this.props.onLeftIconPress}>
            {this.leftIcon
              ? <Icon style={styles.iconStyle} type={this.props.leftIcon} font={'icomoon'} />
              : null}
          </TouchableOpacity> */}

          {/* <View style={styles.titleArea}>
            {this.props.logo ? <Image style={styles.logoStyle} source={this.props.logo} /> : null}
            {this.props.title
              ? <ScalableText style={styles.title}>{this.props.title}</ScalableText>
              : null}
          </View> */}

          {/* <TouchableOpacity style={styles.leftIcon} onPress={this.props.onRightIconPress}>
            {this.leftIcon
              ? <Icon style={styles.iconStyle} type={this.props.rightIcon} font={'icomoon'} />
              : null}
          </TouchableOpacity> */}

        </View>
      </View>
    );
  }
}

Header.propTypes = {
  backgroundColor: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onLeftIconPress: PropTypes.func,
  onRightIconPress: PropTypes.func,
  logo: PropTypes.node,
  menu: PropTypes.bool,
  title: PropTypes.string,
};

Header.defaultProps = {
  backgroundColor: '',
  leftIcon: null,
  rightIcon: null,
  onLeftIconPress: () => {},
  onRightIconPress: () => {},
  logo: null,
  menu: false,
  title: '',
};

module.exports = Header;
