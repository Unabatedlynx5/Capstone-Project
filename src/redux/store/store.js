import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../features/counter/counterSlice';
import { toastReducer } from '../../components/toast/toastSlice';
import usersReducer from '../reducers/users/users.reducer';
import googleReducer from '../../components/google/googleSlice';
import classroomReducer from '../../components/google-classroom/classroomSlice';
import blackbaudReducer from '../../components/blackbaud/blackbaudSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  toast: toastReducer,
  users: usersReducer,
  google: googleReducer,
  classroom: classroomReducer,
  blackbaud: blackbaudReducer,
});


export const store = configureStore({
  reducer: rootReducer,
});
