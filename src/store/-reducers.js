import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import { modeThemeReducer } from './theme/themeSlice';
import { sortbyReducer } from './contacts/sortbySlice';
//
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { LOCAL_STORAGE_KEY } from 'store/contacts/constants';

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
