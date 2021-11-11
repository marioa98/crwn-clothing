import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Routes from "./routes";
import store from "./redux/store";
import { auth, createUserProfileDocument } from "./utils/firebase/firebase";

import "./App.scss";

const App = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    /**
     * Firebase observer that notifies for changes on the users' sign-in state and allows
     * to persists user session.
     * @see https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onauthstatechanged
     */
    const unsuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        /**
         * .onSnapshot() is a listener that updates the document snapshot
         * on the client on real-time
         * @see https://firebase.google.com/docs/firestore/query-data/listen.
         */
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      // Sets current user to null if user sign out
      setCurrentUser(userAuth);
    });

    return () => {
      /**
       * Unsuscribe the google service when the app is unmounted to prevent
       * memory leaks.
       */
      unsuscribeFromAuth();
    };
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
