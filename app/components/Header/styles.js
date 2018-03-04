import { StyleSheet } from 'react-native';

import { colors } from '../../resources';

const styles = StyleSheet.create({
  topBar: {
    // position: 'absolute',
    // justifyContent: 'center',
    alignItems: 'center',
    // right: 0,
    // left: 0,
    flexDirection: 'row',
    height: 56,
  },
  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  topBarContainer: {
    backgroundColor: colors.headerColor,
  },
  statusBar: {
    height: 20,
  },
  titleArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 100,
    height: 35,
  },
  leftIcon: {
    paddingHorizontal: 15,
    height: 56,
    justifyContent: 'center',
  },
  iconStyle: {
    fontSize: 25,
    color: 'white',
  },
});

module.exports = styles;
