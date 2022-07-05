import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAvw0HeckeSTkLarZjkkH5g_IUrTc39Nto",
  authDomain: "chat-app-b8ad0.firebaseapp.com",
  projectId: "chat-app-b8ad0",
  storageBucket: "chat-app-b8ad0.appspot.com",
  messagingSenderId: "815960713081",
  appId: "1:815960713081:web:b01ca9048a90c120ee31a8"
 });

 const db = firebaseApp.firestore();

 const auth = firebase.auth();

 export {db,auth}