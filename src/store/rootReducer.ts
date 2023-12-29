import { combineReducers } from "@reduxjs/toolkit";
import { Namespace } from "../utils/const";
import { landData } from "./land-data/land-data";
// import { UserData } from "./slice/adminSlice";

export const rootReducer = combineReducers({
  [Namespace.Lands]: landData.reducer,
  // [Namespace.User]: UserData.reducer,
})
