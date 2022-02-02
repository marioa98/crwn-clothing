import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";

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

export const createUserProfileDocument = async (userAuth, data) => {
  /**
   * The function if checking if the user is actually sign in instead of sign out,
   * if the user is signing out, the userAuth value will be 'null', otherwise will be
   * an object returned from the firebase API. */

  if (!userAuth) return null;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get(); // Gets the snapshot data of the current user reference.

  if (!snapShot.exists) {
    /**
     * If the snapshot does not contain any existing user, it will create
     * a new user.
     */
    const { displayName, email } = userAuth;
    const createdAt = new Date(); // In order to know when the user document was created.

    // Creates a new user document on the database.
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data
      });
    } catch (error) {
      console.error("Error trying to create a user", error.message);
    }
  }

  return userRef;
};

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
