import { createSelector } from "@reduxjs/toolkit";

const rootSelector = (state) => state.user;

// eslint-disable-next-line import/prefer-default-export
export const selectCurrentUser = createSelector(
  rootSelector,
  (state) => state.currentUser
);