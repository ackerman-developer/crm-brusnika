import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from './slice/adminSlice';
import landReducer from './land-data/land-data';

export const rootReducer = combineReducers({
  admin: adminReducer,
  land: landReducer,
})
