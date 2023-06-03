import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { BASE_URL } from './../../utils/constans'


export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (payload, thunkAPI) => {
    try {
      const result = await axios.post(`${BASE_URL}/auth/register`, payload)
      return result.data
    } catch (err) {
      console.log(err)
      return thunkAPI.rejectWithValue(err)
    }
  }
)

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload, thunkAPI) => {
    try {
      const result = await axios.post(`${BASE_URL}/auth/jwt/login`, payload);
      const login = await axios(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${result.data.access_token}`,
        },
      });
      console.log(data)
      return login.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
)

const addCurrentUser = (state, { payload }) => {
  state.currentUser = payload;
};


const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    formType: "signup",
    showForm: false,
  },
  reducers: {
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
      state.formType = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, addCurrentUser);
    builder.addCase(loginUser.fulfilled, addCurrentUser)
  }
});

export const {toggleForm, toggleFormType } =
  userSlice.actions;

export default userSlice.reducer;