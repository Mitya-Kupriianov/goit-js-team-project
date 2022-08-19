import Darkmode from 'darkmode-js';

new Darkmode().showWidget();

const options = {
  bottom: '100', // default: '32px'
  right: '32px', // default: '32px'
  left: '0', // default: 'unset'
  time: '0.7s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff', // default: '#fff'
  buttonColorDark: '#414141',
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🚀', // default: ''
  autoMatchOsTheme: true, // default: true
};

console.log(options);

const darkmode = new Darkmode(options);
darkmode.showWidget();
