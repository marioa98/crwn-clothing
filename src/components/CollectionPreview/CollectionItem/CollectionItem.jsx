import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import theme from "./CollectionItem.module.scss";
import toCurrency from "../../../lib/toCurrency";
import Button from "../../shared/Button/Button";
import { addItem as addItemAction } from "../../../redux/cart/actions";

const CollectionItem = ({ item, addItem }) => {
  const { t } = useTranslation("cart");
  const { id, name, price, imageUrl } = item;

  return (
    <div className={theme.collectionItem} id={id}>
      <div
        className={theme.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={theme.collectionFooter}>
        <span className={theme.name}>{name}</span>
        <span className={theme.price}>{toCurrency(price)}</span>
      </div>
      <Button inverted style={theme} onClick={() => addItem(item)}>
        {t("add")}
      </Button>
    </div>
  )
};

CollectionItem.propTypes = {
  addItem: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
  }),
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (newItem) => dispatch(addItemAction(newItem))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
