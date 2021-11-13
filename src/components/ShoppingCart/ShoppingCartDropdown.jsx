import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../shared/Button/Button';

import theme from './ShoppingCartDropdown.module.scss';

const ShoppingCartDropdown = () => {
  const { t } = useTranslation("cart");

  return (
    <div className={theme.dropdown}>
      <div className={theme.items} />
      <Button>{t("checkout")}</Button>
    </div>
  )
};

export default ShoppingCartDropdown;