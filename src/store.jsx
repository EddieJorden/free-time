import { configureStore } from '@reduxjs/toolkit';
import userInputSlice from './components/userInputForm/userInputSlice';

const store = configureStore({
  reducer: {
    userInputSlice,
  },
});

export default store;
