import { ACTIONS } from "../constants";

const initialState = {
  currentUser: null
};

const { user: userActions } = ACTIONS;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
