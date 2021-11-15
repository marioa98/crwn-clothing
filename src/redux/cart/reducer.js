import { ACTIONS } from "../constants";

const INITIAL_STATE = {
  isCartHidden: true,
  items: []
};

const { cart: CART_ACTIONS } = ACTIONS;
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTIONS.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isCartHidden: !state.isCartHidden
      }
    case CART_ACTIONS.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    default:
      return state;
  }
};

export default cartReducer;