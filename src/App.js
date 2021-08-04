import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Routes from "./routes";
import { auth } from "./utils/firebase/firebase";

const App = () => {
  const [, setCurrentUser] = useState();

  useEffect(() => {
    /**
     * Firebase observer that notifies for changes on the users' sign-in state and allows
     * to persists user session.
     * @see https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onauthstatechanged
     */
    const unsuscribeFromAuth = auth.onAuthStateChanged((user) => setCurrentUser(user));

    return () => {
      unsuscribeFromAuth();
    }
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
