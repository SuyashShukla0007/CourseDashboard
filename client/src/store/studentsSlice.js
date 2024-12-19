import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://dashboard-nine-eta-41.vercel.app/api/';

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
  const response = await axios.get(`${BASE_URL}/students`);
  return response.data;
});

export const addStudent = createAsyncThunk('students/addStudent', async (student) => {
  const response = await axios.post(`${BASE_URL}/students`, student);
  return response.data;
});

export const updateStudent = createAsyncThunk('students/updateStudent', async ({ id, ...student }) => {
  const response = await axios.put(`${BASE_URL}/students/${id}`, student);
  return response.data;
});

export const deleteStudent = createAsyncThunk('students/deleteStudent', async (id) => {
  await axios.delete(`${BASE_URL}/students/${id}`);
  return id;
});

const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    students: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.students.findIndex(student => student.id === action.payload.id);
        if (index !== -1) {
          state.students[index] = action.payload;
        }
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter(student => student.id !== action.payload);
      });
  },
});

export default studentsSlice.reducer;

