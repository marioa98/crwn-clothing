import React from "react";
import PropTypes from "prop-types";

import theme from "./CollectionItem.module.scss";
import toCurrency from "../../lib/toCurrency";

// eslint-disable-next-line no-unused-vars
const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className={theme.collectionItem}>
    <div
      className={theme.image}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className={theme.collectionFooter}>
      <span className={theme.name}>{name}</span>
      <span className={theme.price}>{toCurrency(price)}</span>
    </div>
  </div>
);

CollectionItem.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string
};

export default CollectionItem;
