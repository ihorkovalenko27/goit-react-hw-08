import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.massage);
    }
  },
);

export const logIn = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    rejectWithValue(error.massage);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    rejectWithValue(error.massage);
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const receivedToken = state.auth.token;

    if (receivedToken === null) {
      return rejectWithValue();
    }

    token.set(receivedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      rejectWithValue(error.massage);
    }
  },
);
