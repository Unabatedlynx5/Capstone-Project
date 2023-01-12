import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../features/counter/counterSlice';
import { toastReducer } from '../../components/toast/toastSlice';
import todoReducer from '../../components/todo/todoSlice';
import usersReducer from '../reducers/users/users.reducer';
import googleReducer from '../../components/google/googleSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  toast: toastReducer,
  todo: todoReducer,
  users: usersReducer,
  google: googleReducer,
});


export const store = configureStore({
  reducer: rootReducer,
});
