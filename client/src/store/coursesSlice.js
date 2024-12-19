import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://course-dashboard-e4s-backend.vercel.app//api/';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await axios.get(`${BASE_URL}/courses`);
  return response.data;
});

export const addCourse = createAsyncThunk('courses/addCourse', async (course) => {
  const response = await axios.post(`${BASE_URL}/courses`, course);
  return response.data;
});

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.courses.push(action.payload);
      });
  },
});

export default coursesSlice.reducer;

