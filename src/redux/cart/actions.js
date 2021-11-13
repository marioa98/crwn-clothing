import { ACTIONS } from "../constants";

const { cart: CART_ACTIONS } = ACTIONS;

// eslint-disable-next-line import/prefer-default-export
export const toggleCartHidden = () => ({
  type: CART_ACTIONS.TOGGLE_CART_HIDDEN
});