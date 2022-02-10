import { createSlice } from "@reduxjs/toolkit";

export const githubSlice = createSlice({
  name : 'github',
  initialState : {
    userName : 'Leonardo pareja',
    zen : 'No zen yet'
  },

  reducers: {
    addZen : (state, action) => {
      state.zen = action.payload;
    },
  }

})

export const {addZen} = githubSlice.actions

export default githubSlice.reducer