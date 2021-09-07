import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCII8ZtSTz4fQI3xByBL_o3y-dVe-yIXYE",
  authDomain: "crwn-db-4dfdc.firebaseapp.com",
  projectId: "crwn-db-4dfdc",
  storageBucket: "crwn-db-4dfdc.appspot.com",
  messagingSenderId: "1066617415840",
  appId: "1:1066617415840:web:1d1f12ce986f42852601c5",
  measurementId: "G-GV3Q9VP4LV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firestore;
