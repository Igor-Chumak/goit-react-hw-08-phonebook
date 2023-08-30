import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '64e5ff5009e64530d17f6928';
const PATHNAME = 'contacts/';
// axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/`;
// axios.defaults.headers = {};
// axios.defaults.params = {};
const instance = axios.create({
  baseURL: `https://${API_KEY}.mockapi.io/`,
  headers: {},
  params: {},
});

// GET @ /contacts/[:id]
export const getContactsThunk = createAsyncThunk(
  'contacts/fetch.get',
  async (contactId = '', thunkAPI) => {
    try {
      const { data } = await instance.get(`${PATHNAME}${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`${error.message} <- ${error.code}`);
    }
  }
);

// POST @ /contacts
export const addContactThunk = createAsyncThunk(
  'contacts/fetch.post',
  async (contact, thunkAPI) => {
    try {
      const { data } = await instance.post(PATHNAME, contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`${error.message} <- ${error.code}`);
    }
  }
);

// DELETE @ /contacts/:id
export const deleteContactThunk = createAsyncThunk(
  'contacts/fetch.delete',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await instance.delete(`${PATHNAME}${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`${error.message} <- ${error.code}`);
    }
  }
);
