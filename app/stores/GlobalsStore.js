//import { observable } from 'mobx';
//import { AsyncStorage } from 'react-native';
//import translations from './TranslationsStore';

class GlobalsStore {
  /* @observable token = '';
  @observable isLoggedIn = false;
  @observable language = 'en';
  @observable timeStamp = '';
  @observable serviceDefaultParams = {
    lang: this.language,
    token: this.token,
    timeStamp: this.timeStamp,
  };
  @observable userLocation = {
    latitude: 0.0,
    longitude: 0.0,
  }; */
  /* setToken(token) {
    AsyncStorage.setItem('token', token);
    this.token = token;
    this.serviceDefaultParams.token = token;

    this.isLoggedIn = !!token;
  }

  getToken() {
    return this.token;
  }
  setTimeStamp(timeStamp) {
    AsyncStorage.setItem('timeStamp', timeStamp);
    this.timeStamp = timeStamp;
    this.serviceDefaultParams.timeStamp = timeStamp;

    this.isLoggedIn = !!timeStamp;
  }

  getTimeStamp() {
    return this.timeStamp;
  }
  changeLoginStatus(isLoggedIn) {
    this.isLoggedIn = isLoggedIn;
  } */

  /* setLanguage(language) {
    this.language = language;
    translations.changeLanguage(language);

    this.serviceDefaultParams.lang = language;
  } */

 /*  getLanguage(){
    return this.language;
  }

  getUserLocation() {
    return this.userLocation;
  }
  setUserLocation(value) {
    this.userLocation = value;
  } */
}

const globalsStore = new GlobalsStore();

/* Check Storage */
/* AsyncStorage.getItem('token').then((token) => {
  if (token != null) {
    globalsStore.setToken(token);
  }
});
AsyncStorage.getItem('timeStamp').then((timeStamp) => {
  if (timeStamp != null) {
    globalsStore.setTimeStamp(timeStamp);
  }
});
AsyncStorage.getItem('lang').then((language) => {
  if (language != null) {
    globalsStore.setLanguage(language);
  }
}); */

export default globalsStore;
