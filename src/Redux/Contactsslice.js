import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetcher, addContact, deleteContact } from './Operations';
import { selectFilter } from './Filterslice';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetcher.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,

    [fetcher.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const indexDel = state.items.findIndex(item => item.id === payload.id);
      state.items.splice(indexDel, 1);
    },

    [fetcher.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

// export const selectVisibleContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectFilter(state);

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

// reducers: {
//   fetchingInProgress(state) {
//     state.isLoading = true;
//   },
//   // Виконається якщо HTTP-запит завершився успішно
//   fetchingSuccess(state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = action.payload;
//   },
//   // Виконається якщо HTTP-запит завершився з помилкою
//   fetchingError(state, action) {
//     state.isLoading = false;
//     state.error = action.payload;
//   },
// },

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;

//     addContact(state, action) {
//       state.list.push(action.payload);
//     },
//     prepare({ name, number }) {
//       const id = nanoid();
//       return {
//         payload: {
//           name,
//           id,
//           number,
//         },
//       };
//     },

//     deleteCont(state, action) {
//       const index = state.list.findIndex(task => task.id === action.payload);
//       state.list.splice(index, 1);
//     },
//   },
// });
// export const { addContact, deleteCont } = contactsSlice.actions;
// export const getContacts = state => state.contacts;

// export const contactsSlice = createSlice({
//   name: 'contacts',

//   initialState: {
//     list: [],
//   },

//   reducers: {
//     addContact(state, action) {
//       state.list.push(action.payload);
//     },
//     prepare({ name, number }) {
//       const id = nanoid();
//       return {
//         payload: {
//           name,
//           id,
//           number,
//         },
//       };
//     },

//     deleteCont(state, action) {
//       const index = state.list.findIndex(task => task.id === action.payload);
//       state.list.splice(index, 1);
//     },
//   },
// });
// export const { addContact, deleteCont } = contactsSlice.actions;
// export const getContacts = state => state.contacts;

// для редакс\\\\\

// export const contactReduser = (state = contactsIntialState, action) => {
//   switch (action.type) {
//     case 'contacts/addcontact': {
//       return [...state, action.payload];
//     }
//     case 'contacts/deleteCont': {
//       return state.filter(el => el.id !== action.payload);
//     }

//     default:
//       return state;
//   }
// };
