import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { createApi } from '../api/apiConfig';

const api = createApi()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: api } })
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
