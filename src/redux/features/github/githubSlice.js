/* eslint-disable no-param-reassign -- state protected from mutating by using immer */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRepos, getUser, getZen } from './githubFetch';

export const fetchZen = createAsyncThunk(
  'github/fetchZen',
  () => getZen(),
);

export const fetchUser = createAsyncThunk(
  'github/fetchUser',
  () => getUser(),
);

export const fetchRepos = createAsyncThunk(
  'github/fetchRepos',
  () => getRepos(),
);

export const githubSlice = createSlice({
  name: 'github',
  initialState: {
    userName: 'Leonardo pareja',
    zen: 'No zen yet',
  },

  reducers: {
    addZen: (state, action) => {
      state.zen = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchZen.fulfilled, (state, action) => {
      state.zen = action.payload;
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.profile = action.payload;
    });

    builder.addCase(fetchRepos.fulfilled, (state, action) => {
      state.repositories = action.payload;
    });
  },

});

export const { addZen } = githubSlice.actions;

export default githubSlice.reducer;
