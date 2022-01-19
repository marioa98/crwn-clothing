import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../shared/Button/Button";

import theme from "./ShoppingCartDropdown.module.scss";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import { selectItems } from "../../redux/cart/selectors";
import { toggleCartHidden } from "../../redux/cart/actions";

const ShoppingCartDropdown = ({ dispatch, items }) => {
  const { t } = useTranslation("cart");
  const navigate = useNavigate();

  const onCartCheckout = () => {
    dispatch(toggleCartHidden());
    navigate("/checkout");
  };

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
  items: PropTypes.array
};

const mapStateToProps = (state) => ({
  items: selectItems(state)
});

export default connect(mapStateToProps)(ShoppingCartDropdown);
