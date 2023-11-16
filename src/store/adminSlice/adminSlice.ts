import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Admin } from '../../types/store';

const initialState: Admin = {
  password: null
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin(state, action: PayloadAction<string>) {
      state.password = action.payload
    },
    removeAdmin(state) {
      state.password = null
    }
  }
})

export const {setAdmin, removeAdmin} = adminSlice.actions

export default adminSlice.reducer

