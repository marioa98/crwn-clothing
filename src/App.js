import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Routes from "./routes";
import { auth, createUserProfileDocument } from "./utils/firebase/firebase";
import { setCurrentUser as setCurrentUserAction } from "./redux/user/actions";

import "./App.scss";

const App = ({ setCurrentUser }) => {

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
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
};

App.propTypes = {
  setCurrentUser: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUserAction(user))
});

export default connect(null, mapDispatchToProps)(App);
