// import firebase from 'firebase/compat/app';
// import 'firebase/compat/database';
// import 'firebase/compat/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyBEGNBbF2XFv7DDyHWnv6jW2Pw7n8MhMgI",
//     authDomain: "chatproject-affa3.firebaseapp.com",
//     projectId: "chatproject-affa3",
//     storageBucket: "chatproject-affa3.appspot.com",
//     messagingSenderId: "748694365720",
//     appId: "1:748694365720:web:3b99caaf1c423ffb3ac56d"
// };

// const firebaseDB = firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth(firebaseDB);

import { browserLocalPersistence, initializeAuth, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyBEGNBbF2XFv7DDyHWnv6jW2Pw7n8MhMgI",
    authDomain: "chatproject-affa3.firebaseapp.com",
    projectId: "chatproject-affa3",
    storageBucket: "chatproject-affa3.appspot.com",
    messagingSenderId: "748694365720",
    appId: "1:748694365720:web:3b99caaf1c423ffb3ac56d"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = initializeAuth(firebaseApp, { persistence: browserLocalPersistence });

export const auth = getAuth();
