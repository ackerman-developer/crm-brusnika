import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../utils/const";
import { landData } from "./land-data/land-data.slice";
import { userData } from "./user-data/user-data.slice";

export const rootReducer = combineReducers({
  [NameSpace.Lands]: landData.reducer,
  [NameSpace.User]: userData.reducer,
})
