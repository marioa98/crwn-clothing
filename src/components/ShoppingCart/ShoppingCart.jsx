import React from 'react';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

import theme from './ShoppingCart.module.scss';

const ShoppingCart = () => (
  <div className={theme.cartIcon}>
    <ShoppingBagIcon className={theme.shoppingIcon} />
    <span className={theme.itemsCount}>0</span>
  </div>
)

export default ShoppingCart;