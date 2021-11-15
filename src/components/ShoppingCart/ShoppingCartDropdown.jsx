import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Button from '../shared/Button/Button';

import theme from './ShoppingCartDropdown.module.scss';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

const ShoppingCartDropdown = ({ items }) => {
  const { t } = useTranslation("cart");

  return (
    <div className={theme.dropdown}>
      <div className={theme.items}>
        {
          items.map((item) => <ShoppingCartItem key={item?.id} item={item} />)
        }
      </div>
      <Button>{t("checkout")}</Button>
    </div>
  )
};

ShoppingCartDropdown.propTypes = {
  items: PropTypes.array
}

const mapStateToProps = (state) => {
  const { cart } = state;
  return {
    items: cart.items
  };
};

export default connect(mapStateToProps)(ShoppingCartDropdown);