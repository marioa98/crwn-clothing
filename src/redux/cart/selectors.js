import { createSelector } from "@reduxjs/toolkit";

const rootSelector = (state) => state.cart;

export const selectItems = createSelector(rootSelector, (cart) => cart.items);

export const selectTotalItems = createSelector(rootSelector, (cart) =>
  cart.items.reduce((total, item) => item.quantity + total, 0)
);

export const selectCartVisibility = createSelector(
  rootSelector,
  (cart) => cart.isCartHidden
);

export const selectTotalPrice = createSelector(rootSelector, (cart) => 
  cart.items.reduce((total, item) => (item.price * item.quantity) + total, 0)
);
