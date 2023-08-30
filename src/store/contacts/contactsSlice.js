import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from 'store/contacts/operationsAPI';
import {
  handleAddContact,
  handleDeleteContact,
  handleFulfilled,
  handleGetContacts,
  handlePending,
  handleRejected,
} from './handlers';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleGetContacts)
      .addCase(addContactThunk.fulfilled, handleAddContact)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContact)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

function isRejectedAction(action) {
  return action.type.endsWith('/rejected');
}

function isPendingAction(action) {
  return action.type.endsWith('/pending');
}

export const contactsReducer = contactsSlice.reducer;
