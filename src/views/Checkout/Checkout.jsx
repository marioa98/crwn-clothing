import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { selectItems, selectTotalPrice } from "../../redux/cart/selectors";

import theme from "./Checkout.module.scss";
import toCurrency from "../../lib/toCurrency";
import CheckoutItem from "./CheckoutItem/CheckoutItem";

const Checkout = ({ items, totalPrice }) => {
  const { t } = useTranslation("checkoutPage");

  return (
    <div className={theme.page}>
      <div className={theme.header}>
        <div className={theme.headerBlock}>
          <span>{t("product")}</span>
        </div>
        <div className={theme.headerBlock}>
          <span>{t("description")}</span>
        </div>
        <div className={theme.headerBlock}>
          <span>{t("quantity")}</span>
        </div>
        <div className={theme.headerBlock}>
          <span>{t("price")}</span>
        </div>
        <div className={theme.headerBlock}>
          <span>{t("remove")}</span>
        </div>
      </div>

      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className={theme.total}>
        <span>
          {t("total")}: {toCurrency(totalPrice)}
        </span>
      </div>
    </div>
  );
};

Checkout.propTypes = {
  items: PropTypes.array,
  totalPrice: PropTypes.number
};

const mapStateToProps = (state) => ({
  items: selectItems(state),
  totalPrice: selectTotalPrice(state)
});

export default connect(mapStateToProps)(Checkout);
