/* eslint-disable no-param-reassign -- state protected from mutating by using immer */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchZen = createAsyncThunk(
  'github/fetchZen',
  async () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    const response = await fetch('https://api.github.com/zen', requestOptions)
      .then((response) => response.text())
      .catch((error) => console.log('error', error));

    return response;
  },
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
  },

});

export const { addZen } = githubSlice.actions;

export default githubSlice.reducer;
