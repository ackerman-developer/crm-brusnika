import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import apiConfig from '../api/apiConfig';

const api = apiConfig

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: api } })
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
