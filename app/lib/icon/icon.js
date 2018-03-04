import React, { Component, PropTypes } from 'react';
import ScalableText from 'react-native-text';
import stylePropType from 'react-style-proptype';

export default class Icon extends Component {
  render() {
    const { type, font, style } = this.props;
    return (
      <ScalableText style={[style, { fontFamily: font }]}>
        {type}
      </ScalableText>
    );
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  style: stylePropType.isRequired,
};
