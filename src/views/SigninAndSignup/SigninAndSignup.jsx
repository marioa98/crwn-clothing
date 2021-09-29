import React from "react";

import SignIn from "../../components/Signin/Signin";
import Signup from "../../components/Signup/Signup";

import styles from "./SigninAndSignup.module.scss";

const SigninAndSignup = () => (
  <div className={styles.signInAndSignUp}>
    <SignIn />
    <Signup />
  </div>
);

export default SigninAndSignup;
