import { createReducer } from '@reduxjs/toolkit';
import { logIn, logOut, register, getCurrentUser } from '../users/auth-operations';
import {
  deleteContactsError,
  deleteContactsRequest,
  fetchContactsError,
  fetchContactsRequest,
  addContactsError,
  addContactsRequest,
} from '../phonebook/phonebook-actions';

const setError = (_, { payload }) => payload;
const resetError = () => null;

export const errorReducer = createReducer(null, {
  [register.rejected]: setError,
  [logIn.rejected]: setError,
  [logOut.rejected]: setError,
  [register.pending]: resetError,
  [logIn.pending]: resetError,
  [logOut.pending]: resetError,
  [getCurrentUser.rejected]: setError,
  [fetchContactsError]: setError,
  [fetchContactsRequest]: resetError,
  [addContactsError]: setError,
  [addContactsRequest]: resetError,
  [deleteContactsError]: setError,
  [deleteContactsRequest]: resetError,
});
