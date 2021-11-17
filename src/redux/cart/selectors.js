import { createSelector } from '@reduxjs/toolkit';

const rootSelector = state => state.cart;

export const selectItems = createSelector(
  rootSelector,
  (cart) => cart.items
);

export const selectTotalItems = createSelector(
  rootSelector,
  (cart) => 
    cart.items.reduce((total, item) => item.quantity + total, 0)
);
