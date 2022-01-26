import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
// import { api } from '@services/api';

const initialState = {
  user: {},
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {},
});

export const { logout } = auth.actions;
export default auth.reducer;
