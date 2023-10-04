import { createSlice } from '@reduxjs/toolkit';
import { fetcher, addContact, deleteContact } from '../Redux/Operations';
export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetcher.pending](state) {
      state.isLoading = true;
    },
    [fetcher.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetcher.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const indexDel = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(indexDel, 1);
    },
  },
});
export const contactReducer = contactsSlice.reducer;
export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

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
