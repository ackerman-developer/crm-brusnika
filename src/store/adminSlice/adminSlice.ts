import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Admin ={
  password: string | null
}

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

