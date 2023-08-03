/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './country/countriesSlice';

const store = configureStore({
  reducer: {
    country: countriesReducer,
  },
});

export default store;
