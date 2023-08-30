import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import { reducer } from './reducers';
import { combineReducers } from 'redux';
import { LOCAL_STORAGE_KEY } from 'store/contacts/constants';
import { sortbyReducer } from './contacts/sortbySlice';
import { contactsReducer } from './contacts/contactsSlice';
import { modeThemeReducer } from './theme/themeSlice';
import { filterReducer } from './contacts/filterSlice';

const persistConfigTheme = {
  key: LOCAL_STORAGE_KEY + '_theme',
  storage,
};

const persistedReducerTheme = persistReducer(
  persistConfigTheme,
  modeThemeReducer
);

export const reducer = combineReducers({
  theme: persistedReducerTheme,
  // theme: modeThemeReducer,
  contacts: contactsReducer,
  filter: filterReducer,
  sortby: sortbyReducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
