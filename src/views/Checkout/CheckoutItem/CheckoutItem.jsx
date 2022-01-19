import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import theme from "./CheckoutItem.module.scss";
import toCurrency from "../../../lib/toCurrency";
import { addItem as addItemAction, removeItem as removeItemAction } from "../../../redux/cart/actions";

const CheckoutItem = ({ addItem, item, onRemove, removeItem }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className={theme.checkoutItem}>
      <div className={theme.image}>
        <img src={imageUrl} alt={name} />
      </div>
      <span className={theme.name}>{name}</span>
      <span className={theme.quantity}>
        <div className={theme.arrow} onClick={() => removeItem(item)}>&#10094;</div>
        <span className={theme.value}>{quantity}</span>
        <div className={theme.arrow} onClick={() => addItem(item)}>&#10095;</div>
      </span>
      <span className={theme.price}>{toCurrency(price)}</span>
      <div className={theme.removeButton} onClick={onRemove}>&#10005;</div>
    </div>
  );
};

CheckoutItem.propTypes = {
  addItem: PropTypes.func,
  item: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number
  }),
  onRemove: PropTypes.func,
  removeItem: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (newItem) => dispatch(addItemAction(newItem)),
  removeItem: (item) => dispatch(removeItemAction(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
