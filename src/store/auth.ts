import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { api } from "../services/api";

export interface Contact {
  id: number;
}

export interface AuthData {
  contact: Contact;
  type: string;
  token: string;
  expires_at: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: LoginProps, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<AuthData> = await api.post("/auth/login", {
        email,
        password,
      });

      api.defaults.headers.common.Authorization = `Bearer ${data.token}`;

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  user: {} as Contact,
  type: "",
  expires_at: "",
  token: "",
  loading: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload?.contact!;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { logout } = auth.actions;
export default auth.reducer;
