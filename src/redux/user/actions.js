import { ACTIONS } from "../constants";

// eslint-disable-next-line import/prefer-default-export
export const setCurrentUser = (user) => ({
  type: ACTIONS.user.SET_CURRENT_USER,
  payload: user
});
