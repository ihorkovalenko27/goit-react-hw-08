import { createSlice, createReducer } from '@reduxjs/toolkit';
import { register, logIn, logOut, getCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const error = createReducer(null, {
  [register.rejected]: (_, action) => action.payload,
  [register.pending]: () => null,
  [logIn.rejected]: (_, action) => action.payload,
  [logIn.pending]: () => null,
  [logOut.rejected]: (_, action) => action.payload,
  [logOut.pending]: () => null,
  [getCurrentUser.rejected]: (_, action) => action.payload,
});
