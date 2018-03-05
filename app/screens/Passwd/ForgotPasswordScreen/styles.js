import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts } from '../../../resources';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89F9E6',
  },
  descriptionText: {
    textAlign: 'center',
    padding: 10,
    marginBottom: 5,
  },
  maskedTextInput: {
    flexDirection: 'row',
    height: 50,
    color: colors.roundedTextInputBgColor,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    fontSize: 24,
    marginTop: 10,
    fontFamily: fonts.NexaBold,
  },
  buttonStyle: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    backgroundColor: colors.blueboxhover,
  },
  tabStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  activeTabStyle: {
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 20,
  },
  activeTabTextStyle: {
    backgroundColor: 'transparent',
    fontSize: 17,
    color: colors.blueboxhover,
    fontWeight: '700',
    padding: 2,
  },
  tabTextStyle: {
    backgroundColor: 'transparent',
    fontSize: 17,
    color: '#62B2B9',
    fontWeight: '700',
  },
  dividerStyle: {
    backgroundColor: colors.blueboxhover,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
});

module.exports = styles;
