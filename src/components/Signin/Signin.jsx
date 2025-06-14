import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Input from "../shared/Input/Input";
import Button from "../shared/Button/Button";
import { auth, signInWithGoogle } from "../../utils/firebase/firebase";

import theme from "./Signin.module.scss";

const initialState = {
  email: "",
  password: ""
};

const SignIn = () => {
  const [state, setState] = useState(initialState);
  const { t } = useTranslation(["signIn", "inputs", "buttons"]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState(initialState);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={theme.signInForm}>
      <h2>{t("subtitle")}</h2>
      <span>{t("message")}</span>

      <form onSubmit={handleSubmit}>
        <Input
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={state.email}
          required
          label={t("inputs:email")}
        />

        <Input
          id="password"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          required
          label={t("inputs:password")}
        />

        <div className={theme.buttons}>
          <Button type="submit">{t("buttons:signIn")}</Button>
          <Button type="button" onClick={signInWithGoogle} isGoogle>
            {t("buttons:googleSignIn")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
