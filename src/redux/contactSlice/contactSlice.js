import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const contactsInitialState = {
  contactsItem: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFetchContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contactsItem = action.payload;
};

const handleAddContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.contactsItem.push(action.payload);
};

const handleDeleteContactsFulfilled = (state, action) => {
  console.log(action.payload.id);
  state.isLoading = false;
  const contactId = state.contactsItem.findIndex(
    contact => contact.id === action.payload.id
  );

  state.contactsItem.splice(contactId, 1);
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContactsFulfilled)
      .addCase(deleteContact.rejected, handleRejected),

  // reducers: {
  //   addContact(state, action) {
  //     state.push(action.payload);
  //   },

  // deleteContact(state, action) {
  //   const contactId = action.payload;

  //   state.contacts = state.contacts.filter(
  //     contact => contact.id !== contactId
  //   );
  // },

  // deleteContact(state, action) {
  //   const contactId = action.payload;
  //   return state.filter(contact => contact.id !== contactId);
  // },

  // filterContact(state, action) {
  //   state.filter = action.payload;
  // },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
