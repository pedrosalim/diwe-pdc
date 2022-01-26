import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { api } from "../services/api";
import { RootState } from ".";

export interface Contact {
  id: string;
  name: string;
  mobile: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface Users {
  name: string;
  mobile: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface FormDataAddContact {
  name: string;
  email: string;
  mobile: string;
}

export const getContacts = createAsyncThunk("/contacts", async (_) => {
  const { data }: AxiosResponse<Contact[]> = await api.get(`/contacts`);

  return data;
});

export const addContact = createAsyncThunk(
  "/contacts/addContact",
  async (formData: FormDataAddContact, { dispatch, rejectWithValue }) => {
    try {
      const { data }: AxiosResponse = await api.post("/contacts", formData);

      dispatch(getContacts());

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  list: [] as Contact[],
  loading: false,
};

const contacts = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getContacts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(getContacts.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(addContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addContact.fulfilled, (state) => {
      state.loading = true;
    });
    builder.addCase(addContact.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default contacts.reducer;
