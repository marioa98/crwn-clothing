import React from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden as toggleCartHiddenAction } from "../../redux/cart/actions";

import theme from "./ShoppingCart.module.scss";
import { selectTotalItems } from "../../redux/cart/selectors";

const ShoppingCart = ({ toggleCartHidden }) => {
  const totalItems = useSelector(selectTotalItems);

  return (
    <div className={theme.cartIcon} onClick={toggleCartHidden}>
      <ShoppingBagIcon className={theme.shoppingIcon} />
      <span className={theme.itemsCount}>{totalItems}</span>
    </div>
  );
};

ShoppingCart.propTypes = {
  toggleCartHidden: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction())
});

export default connect(null, mapDispatchToProps)(ShoppingCart);
