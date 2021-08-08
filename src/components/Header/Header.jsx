import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import endpoints from "../../lib/endpoints.json";
import theme from "./Header.module.scss";

import { auth } from "../../utils/firebase/firebase";

const Header = ({ currentUser }) => {
  const { t } = useTranslation("menu");

  return (
    <div className={theme.header}>
      <Link className={theme.logoContainer} to="/">
        <Logo className={theme.logo} />
      </Link>

      <div className={theme.options}>
        <Link className={theme.option} to={endpoints.shop.root}>
          {t("shop")}
        </Link>
        <Link className={theme.option} to={endpoints.contact}>
          {t("contact")}
        </Link>
        {
          currentUser ? (
            <div className={theme.option} onClick={() => auth.signOut()}>{t("signOut")}</div>
          ) : (
            <Link className={theme.option} to={endpoints.signIn}>{t("signIn")}</Link>
          )
        }
      </div>
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.object 
}

export default Header;
