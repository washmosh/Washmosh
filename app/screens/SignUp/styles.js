import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../resources';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#89F9E6',
  },
  loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
      position: 'absolute',
      width: 300,
      height: 100,
  },
  hoshiLabel: {
    fontSize: 13,
    color: colors.bluebox,
    backgroundColor: 'transparent',
    marginTop: 13,
  },
  hoshiLabel2: {
    fontSize: 13,
    color: colors.bluebox,
    backgroundColor: 'transparent',
    marginTop: 5,
  },
  kaedeLabel: {
    fontSize: 17,
    color: colors.bluebox,
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  hoshiInput: {
    fontSize: 15,
    color: 'black',
    backgroundColor: 'transparent',
    //fontFamily: fonts.AvertaDemo,
    marginLeft: -10,
  },
  input:{
    width: window.width - 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    padding: 10,
    //color: '#fff'
  },
  buttonContainer:{
    width: window.width - 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  underlineText:{
    textAlign: 'center',
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'rgba(0,50,0,0.7)',
  }
});

module.exports = styles;
