import { createSlice } from '@reduxjs/toolkit';
import { createLand, fetchLands } from './api-action';

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
  isFetchingLandsData: boolean,
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
  },
  isFetchingLandsData: false,
}

export const landSlice = createSlice({
  name: 'land',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(createLand.fulfilled, (state, action: PayloadAction<LandFormData>) => {
    //   state.lands.push(action.payload);
    // })
    builder
      .addCase(fetchLands.pending, (state) => {
        state.isFetchingLandsData = true
      })
      .addCase(fetchLands.fulfilled, (state, action) => {
        state.lands = [...state.lands, action.payload]
        state.isFetchingLandsData = false
      })
      .addCase(createLand.fulfilled, (state, action) => {
        state.lands.push(action.payload)
      })
  }
})

export default landSlice.reducer
