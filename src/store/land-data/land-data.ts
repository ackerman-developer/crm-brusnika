import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createLand } from './api-action';

interface LandFormData {
  registerNumber: number | null,
  address: string,
  square: string,
  aboutHolder: string,
  price: number | null,
  searchObject: string
}

interface LandState {
  lands: LandFormData[]
  formData: LandFormData
}

const initialState: LandState = {
  lands: [],
  formData: {
    registerNumber: null,
    address: '',
    square: '',
    aboutHolder: '',
    price: null,
    searchObject: ''
  }
}

export const landSlice = createSlice({
  name: 'land',
  initialState,
  reducers: {
    addLand: (state, action: PayloadAction<LandFormData>) => {
      state.lands.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createLand.fulfilled, (state, action: PayloadAction<LandFormData>) => {
      state.lands.push(action.payload);
    })
  }
})

export const { addLand } = landSlice.actions
export default landSlice.reducer
