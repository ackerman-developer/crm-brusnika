import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './slice/adminSlice';

const store = configureStore({
  reducer: {
    admin: adminReducer,
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
