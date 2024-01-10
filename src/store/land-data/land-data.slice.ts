import { createSlice } from "@reduxjs/toolkit";
import { createLand, deleteLandByID, fetchLands, fetchLandsByID } from "./api-action";
import { NameSpace } from "../../utils/const";
import { LandState } from "../../types/types";


const initialState: LandState = {
  lands: [],
  landId: [],
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
        state.lands = state.landId.concat(action.payload)
      })
      .addCase(deleteLandByID.fulfilled, (state, action) => {
        const deletedLandId = action.meta.arg
        state.lands = state.lands.filter(land => land.id !== deletedLandId);
      })
  }
})
