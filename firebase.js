import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB2ZHQQWPZss-WF0pV4TQJxFngvBnhdDWA',
  authDomain: 'coder-011.firebaseapp.com',
  databaseURL: 'https://coder-011.firebaseio.com',
  projectId: 'coder-011',
  storageBucket: '',
  messagingSenderId: '1061629487048',
  appId: '1:1061629487048:web:0f7ab74de075c00985c2fd',
};

firebase.initializeApp (firebaseConfig);

export const auth = firebase.auth ();
export const db = firebase.firestore ();
