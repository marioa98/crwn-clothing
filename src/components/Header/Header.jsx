import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import endpoints from "../../lib/endpoints.json";
import theme from "./Header.module.scss";

import { auth } from "../../utils/firebase/firebase";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import ShoppingCartDropdown from "../ShoppingCart/ShoppingCartDropdown";
import { selectCurrentUser } from "../../redux/user/selectors";

const Header = ({ currentUser, isCartHidden }) => {
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
        {currentUser ? (
          <div className={theme.option} onClick={() => auth.signOut()}>
            {t("signOut")}
          </div>
        ) : (
          <Link className={theme.option} to={endpoints.signIn}>
            {t("signIn")}
          </Link>
        )}
        <ShoppingCart />
      </div>
      {!isCartHidden && <ShoppingCartDropdown />}
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.object,
  isCartHidden: PropTypes.bool
};

const mapStateToProps = (state) => {
  const { cart } = state;
  return {
    currentUser: selectCurrentUser(state),
    isCartHidden: cart.isCartHidden
  };
};

export default connect(mapStateToProps)(Header);
