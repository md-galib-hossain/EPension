// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Define an async thunk for user registration.
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    // console.log('userData api----------: ', userData);

    try {
      const response = await axios.post('http://localhost:5000/user/register', userData);
      // console.log('response ----------: ', response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
      // console.log('error ----------: ', error.response.data);
    }
  }
);

// Define an async thunk for user login.
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    // console.log('credentials ----------: ', credentials);
    try {
      const response = await axios.post('http://localhost:5000/user/login', credentials);
      // console.log('response ----------: ', response);
      localStorage.setItem('token', response.data.token);
      // now save user data without password
      localStorage.setItem('user', JSON.stringify(response.data.auth));

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
  },
});


export const { logout } = authSlice.actions;
export default authSlice.reducer;
