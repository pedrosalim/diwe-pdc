import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { api } from "../services/api";
import { RootState } from ".";

export interface Contact {
  id: number;
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

export interface FormDataContact {
  id: number;
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
  async (formData: FormDataContact, { dispatch, rejectWithValue }) => {
    try {
      const { data }: AxiosResponse = await api.post("/contacts", formData);

      dispatch(getContacts());
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editContact = createAsyncThunk(
  "/contacts/edit",
  async (formData: FormDataContact, { rejectWithValue, dispatch }) => {
    try {
      const { data }: AxiosResponse = await api.put(
        `/contacts/${formData.id}`,
        formData
      );

      dispatch(getContacts());
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "/contacts/delete",
  async (contactId: number, { rejectWithValue }) => {
    try {
      await api.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editSelector = (id: number) =>
  createSelector(
    (state: RootState) => state.contacts.list,
    (contact) => contact.filter((c) => c.id === id)[0]
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
    builder.addCase(deleteContacts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteContacts.fulfilled, (state, action) => {
      state.list = state.list.filter(
        (contact) => contact.id !== action.payload
      );
      state.loading = false;
    });
    builder.addCase(deleteContacts.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(editContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editContact.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(editContact.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default contacts.reducer;
