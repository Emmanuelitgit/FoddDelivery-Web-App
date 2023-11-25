import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
  currentUser: localStorage.getItem("user" || null),
  userId: localStorage.getItem("id" || null)
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload.username;
      state.userId = action.payload.id;
      localStorage.setItem("user", state.currentUser);
      localStorage.setItem("id", state.userId)
    },
    logout: (state) => {
      state.currentUser = null;
      state.userId = null
      localStorage.removeItem("user");
      localStorage.removeItem("id");
    },
  },
});

export const {login, logout } = authSlice.actions;
