import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

// Initial firebase setup
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication utility

const provider = new firebase.auth.GoogleAuthProvider(); // Give acccess to the provider's authentincation library.
auth.useDeviceLanguage(); // Google sign-in form uses device language to render its text.
/**
 * As the name says, firebase allows to set some custom parameters on the authentication
 * method.
 *
 * @see https://developers.google.com/identity/protocols/oauth2/openid-connect#authenticationuriparameters.
 *
 * - prompt (none/consent/select_account) - A space-delimited list of string values that specifies
 *    whether the authorization server prompts the user for reauthentication and consent.
 */

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
