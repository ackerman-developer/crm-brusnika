import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../utils/const";
import { landData } from "./land-data/land-data.slice";
import { userData } from "./user-data/user-data.slice";
import { entityData } from "./entity-data/entity-data.slice";

export const rootReducer = combineReducers({
  [NameSpace.Lands]: landData.reducer,
  [NameSpace.User]: userData.reducer,
  [NameSpace.Entity]: entityData.reducer
})
