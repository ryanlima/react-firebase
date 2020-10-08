import firebase from 'firebase'

const prodConfig = {
  apiKey: "AIzaSyCfo84ei_WwIGTWkX5VH4Le8KfEQZ2qunQ",
  authDomain: "react-firebase-a77b2.firebaseapp.com",
  databaseURL: "https://react-firebase-a77b2.firebaseio.com",
  projectId: "react-firebase-a77b2",
  storageBucket: "react-firebase-a77b2.appspot.com",
  messagingSenderId: "887283175925",
  appId: "1:887283175925:web:3c8e801d920ca6940250bc"
};

const devConfig = {
  apiKey: "AIzaSyCfo84ei_WwIGTWkX5VH4Le8KfEQZ2qunQ",
  authDomain: "react-firebase-a77b2.firebaseapp.com",
  databaseURL: "https://react-firebase-a77b2.firebaseio.com",
  projectId: "react-firebase-a77b2",
  storageBucket: "react-firebase-a77b2.appspot.com",
  messagingSenderId: "887283175925",
  appId: "1:887283175925:web:3c8e801d920ca6940250bc"
};

const config = process.env.NODE_ENV === 'production'  ? prodConfig : devConfig;

export const firebaseImpl = firebase.initializeApp(config)
export const firebaseDatabase = firebase.database()