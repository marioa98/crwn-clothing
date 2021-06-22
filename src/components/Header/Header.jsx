import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import endpoints from "../../lib/endpoints.json";
import theme from "./Header.module.scss";

const Header = () => {
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
      </div>
    </div>
  )
};

export default Header;
