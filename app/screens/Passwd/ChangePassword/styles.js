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
    marginTop: 20,
    padding: 10,
  },
  maskedTextInput: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: colors.lightgrey,
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
    color: colors.COLOR_BUTTON_TEXT,
    fontFamily: fonts.NexaBold,
  },
  input:{
    fontSize: 20,
    width: 300,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    padding: 10,
    color: '#fff'
  },
  buttonContainer:{
    width: 300,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
});

module.exports = styles;
