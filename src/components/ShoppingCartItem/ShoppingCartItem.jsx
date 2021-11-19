import React from "react";
import PropTypes from "prop-types";

import toCurrency from "../../lib/toCurrency";
import theme from "./ShoppingCartItem.module.scss";

const ShoppingCartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className={theme.item}>
    <img src={imageUrl} alt={name} />
    <div className={theme.itemDetails}>
      <span className={theme.itemName}>{name}</span>
      <span className={theme.itemPrice}>
        {quantity} x {toCurrency(price)}
      </span>
    </div>
  </div>
);

ShoppingCartItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number
  })
};

export default ShoppingCartItem;
