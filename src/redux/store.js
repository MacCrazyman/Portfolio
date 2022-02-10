import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import githubReducer from "./features/github/githubSlice";

export default configureStore({
  reducer : {
    github : githubReducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})