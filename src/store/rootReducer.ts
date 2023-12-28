import { combineReducers } from "@reduxjs/toolkit";
import { Namespace } from "../utils/const";
import { landData } from "./land-data/land-data";

export const rootReducer = combineReducers({
  [Namespace.Lands]: landData.reducer,
})
