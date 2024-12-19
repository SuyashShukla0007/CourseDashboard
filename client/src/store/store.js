import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from './studentsSlice';
import coursesReducer from './coursesSlice';

export const store = configureStore({
  reducer: {
    students: studentsReducer,
    courses: coursesReducer,
  },
});

