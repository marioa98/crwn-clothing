import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "../shared/Button/Button";
import Input from "../shared/Input/Input";
import { auth, createUserProfileDocument } from "../../utils/firebase/firebase";

import style from "./Signup.module.scss";

const defaultState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const Signup = () => {
  const [formState, setFormState] = useState(defaultState);
  const { t } = useTranslation(["signUp", "inputs", "buttons", "messages"]);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { confirmPassword, displayName, email, password } = formState;

    if (password !== confirmPassword) {
      alert(t("messages:passwordUnmatch"));
      return;
    }

    try {
      // If user structure is ok, creates a new user with firebase methods
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // Creates user's profile after the account was created
      createUserProfileDocument(user, { displayName });
      setFormState(defaultState);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.signUp}>
      <h2 className={style.title}>{t("title")}</h2>
      <span>{t("message")}</span>

      <form className={style.signUpForm} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="displayName"
          value={formState.displayName}
          onChange={onChange}
          label={t("inputs:displayName")}
          required
        />

        <Input
          type="email"
          name="email"
          value={formState.email}
          onChange={onChange}
          label={t("inputs:email")}
          required
        />

        <Input
          type="password"
          name="password"
          value={formState.password}
          onChange={onChange}
          label={t("inputs:password")}
          required
        />

        <Input
          type="password"
          name="confirmPassword"
          value={formState.confirmPassword}
          onChange={onChange}
          label={t("inputs:confirmPassword")}
          required
        />

        <Button type="submit">{t("buttons:signUp")}</Button>
      </form>
    </div>
  );
};

export default Signup;
