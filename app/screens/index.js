import { Navigation } from 'react-native-navigation';

import HomeScreen from './Home';
import LoginScreen from './Login';
import SignupScreen from './SignUp';

// register all screens of the app (including internal ones)
export default function registerScreens() {
 // Navigation.registerComponent('RightSideMenu', () => RightSideMenu);
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
  Navigation.registerComponent('LoginScreen', () => LoginScreen);
  Navigation.registerComponent('SignupScreen', () => SignupScreen);
}
