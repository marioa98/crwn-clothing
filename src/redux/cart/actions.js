import { ACTIONS } from "../constants";

const { cart: CART_ACTIONS } = ACTIONS;

export const toggleCartHidden = () => ({
  type: CART_ACTIONS.TOGGLE_CART_HIDDEN
});

export const addItem = (newItem) => ({
  type: CART_ACTIONS.ADD_ITEM,
  payload: newItem
});

export const removeItem = (itemToRemove) => ({
  type: CART_ACTIONS.REMOVE_ITEM,
  payload: itemToRemove
})

export const clearItem = (itemToClear) => ({
  type: CART_ACTIONS.CLEAR_ITEM,
  payload: itemToClear
})
