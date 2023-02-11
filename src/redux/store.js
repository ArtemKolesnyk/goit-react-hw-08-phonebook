import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const reducers = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: reducers,
});
