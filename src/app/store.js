import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { toastReducer } from '../components/toastSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toast: toastReducer,

  },
});
