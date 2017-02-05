import firebase from 'firebase';

const isProduction = process.env.NODE_ENV === 'production';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDNCS4PioXFv_jqk-FqeEIefH47TrJSVbU',
  authDomain: 'scoreboard-retro.firebaseapp.com',
  databaseURL: 'https://scoreboard-retro.firebaseio.com',
  storageBucket: 'scoreboard-retro.appspot.com',
  messagingSenderId: '898693416553',
};
firebase.initializeApp(config);

export default firebase.database();

let scoresTargetRef = firebase.database().ref('scoresDev');

if (isProduction) {
  scoresTargetRef = firebase.database().ref('scores');
}

export const scoresRef = scoresTargetRef;
