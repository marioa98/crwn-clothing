import React from "react";
import PropTypes from "prop-types";

import theme from "./CheckoutItem.module.scss";
import toCurrency from "../../../lib/toCurrency";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className={theme.checkoutItem}>
      <div className={theme.image}>
        <img src={imageUrl} alt={name} />
      </div>
      <span className={theme.name}>{name}</span>
      <span className={theme.quantity}>{quantity}</span>
      <span className={theme.price}>{toCurrency(price)}</span>
      <div className={theme.removeButton}>&#10005;</div>
    </div>
  );
};

CheckoutItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number
  })
};

export default CheckoutItem;
