// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
// import { contactReduser, filterReduser } from './Redusers';
import { contactReducer } from '../Redux/Contactsslice';
import { filterSlice } from './Filterslice';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterSlice.reducer,
  },
});

// export const persistor = persistStore(store);
// console.log(persistor);

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
// {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// }
