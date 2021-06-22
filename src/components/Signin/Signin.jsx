import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Input from "../shared/Input/Input";
import Button from "../shared/Button/Button";
import theme from "./Signin.module.scss";

const initialState = {
  email: "",
  password: ""
}

const SignIn = () => {
  const [state, setState] = useState(initialState)
  const { t } = useTranslation(["signIn", "inputs", "buttons"])

  const handleSubmit = (event) => {
    event.preventDefault()
    setState(initialState)
  }

  const handleChange = ({ target }) => {
    const { value, name } = target;

    setState((prevState) => ({...prevState, [name]: value}));
  };

  return(
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
            onChange={handleChange }
            required
            label={t("inputs:password")}
          />

          <Button type="submit">
            {t("buttons:signIn")}
          </Button>
        </form>
      </div>
  )
}

export default SignIn;
