import { createSlice } from "@reduxjs/toolkit";
import { createLand } from "./api-action";
import { Namespace } from "../../utils/const";
import { LandState } from "../../types/types";


const initialState: LandState = {
  lands: [],
}

export const landData = createSlice({
  name: Namespace.Lands,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createLand.fulfilled, (state, action) => {
        state.lands.push(action.payload)
      })
  }
})
