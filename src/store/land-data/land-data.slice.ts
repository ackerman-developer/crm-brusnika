import { createSlice } from "@reduxjs/toolkit";
import { createLand, fetchLands, fetchLandsByID } from "./api-action";
import { NameSpace } from "../../utils/const";
import { LandState } from "../../types/types";


const initialState: LandState = {
  lands: [],
  uploadLand: [],
  isLandsDataLoading: false
}

export const landData = createSlice({
  name: NameSpace.Lands,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createLand.fulfilled, (state, action) => {
        state.uploadLand.push(action.payload)
      })
      .addCase(fetchLands.pending, (state) => {
        state.isLandsDataLoading = true;
      })
      .addCase(fetchLands.fulfilled, (state, action) => {
        state.lands = action.payload
        state.isLandsDataLoading = false;
      })
      .addCase(fetchLandsByID.fulfilled, (state, action) => {
        state.lands = action.payload
      })
  }
})
