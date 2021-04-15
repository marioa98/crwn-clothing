import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import endpoints from "../../lib/endpoints.json";
import theme from "./Header.module.scss";

const Header = () => (
  <div className={theme.header}>
    <Link className={theme.logoContainer} to="/">
      <Logo className={theme.logo} />
    </Link>

    <div className={theme.options}>
      <Link className={theme.option} to={endpoints.shop.root}>
        SHOP
      </Link>
      <Link className={theme.option} to={endpoints.contact}>
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
