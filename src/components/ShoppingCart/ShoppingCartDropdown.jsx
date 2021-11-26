import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../shared/Button/Button";

import theme from "./ShoppingCartDropdown.module.scss";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import { selectItems } from "../../redux/cart/selectors";
import { toggleCartHidden } from "../../redux/cart/actions";

const ShoppingCartDropdown = ({ dispatch, history, items }) => {
  const { t } = useTranslation("cart");

  const onCartCheckout = () => {
    dispatch(toggleCartHidden());
    history.push("/checkout");
  }

  return (
    <div className={theme.dropdown}>
      <div className={theme.items}>
        {items.length ? (
          items.map((item) => <ShoppingCartItem key={item?.id} item={item} />)
        ) : (
          <span className={theme.emptyCart}>{t("empty")}</span>
        )}
      </div>
      <Button onClick={onCartCheckout}>{t("checkout")}</Button>
    </div>
  );
};

ShoppingCartDropdown.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
  items: PropTypes.array
};

const mapStateToProps = (state) => ({
  items: selectItems(state)
})

export default withRouter(connect(mapStateToProps)(ShoppingCartDropdown));
