import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Button from "../shared/Button/Button";

import theme from "./ShoppingCartDropdown.module.scss";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import { selectItems } from "../../redux/cart/selectors";

const ShoppingCartDropdown = () => {
  const { t } = useTranslation("cart");
  const items = useSelector(selectItems)

  return (
    <div className={theme.dropdown}>
      <div className={theme.items}>
        {items.map((item) => (
          <ShoppingCartItem key={item?.id} item={item} />
        ))}
      </div>
      <Button>{t("checkout")}</Button>
    </div>
  );
};

export default ShoppingCartDropdown;
