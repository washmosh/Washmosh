/* import { AppRegistry } from 'react-native';
import App from './screens/App';

AppRegistry.registerComponent('Washmosh', () => App); */

import { Navigation } from 'react-native-navigation';

// screen related book keeping
import registerScreens from './screens';

registerScreens();

export default function startApp() {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'SignupScreen',
      title: 'Navigation',
      navigatorStyle: {},
    },
    appStyle: {
      orientation: 'portrait', // Wix Navigation V2'de bu şekilde kullanılıyor
    },
    drawer: {
      /*right: {
        screen: 'RightSideMenu',
      },*/
      style: {
        leftDrawerWidth: 65,
        rightDrawerWidth: 65,
      },
    },
    portraitOnlyMode: true,
    animationType: 'fade',
  });
}
