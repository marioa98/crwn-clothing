import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../shared/Button/Button";

import theme from "./ShoppingCartDropdown.module.scss";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import { selectItems } from "../../redux/cart/selectors";

const ShoppingCartDropdown = ({ history }) => {
  const { t } = useTranslation("cart");
  const items = useSelector(selectItems);

  return (
    <div className={theme.dropdown}>
      <div className={theme.items}>
        {items.length ? (
          items.map((item) => <ShoppingCartItem key={item?.id} item={item} />)
        ) : (
          <span className={theme.emptyCart}>{t("empty")}</span>
        )}
      </div>
      <Button onClick={() => history.push("/checkout")}>{t("checkout")}</Button>
    </div>
  );
};

ShoppingCartDropdown.propTypes = {
  history: PropTypes.object
};

export default withRouter(ShoppingCartDropdown);
