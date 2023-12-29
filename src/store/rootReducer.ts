import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../utils/const";
import { landData } from "./land-data/land-data";
// import { UserData } from "./slice/adminSlice";

export const rootReducer = combineReducers({
  [NameSpace.Lands]: landData.reducer,
  // [Namespace.User]: UserData.reducer,
})
