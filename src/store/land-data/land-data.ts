import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LandFormData } from "../../types/types";
import { createLand } from "./api-action";
import { Namespace } from "../../utils/const";

interface LandState {
  lands: LandFormData[];
  loading: boolean;
}

const initialState: LandState = {
  lands: [],
  loading: false,
}

export const landData = createSlice({
  name: Namespace.Lands,
  initialState,
  reducers: {
  },
  extraReducers:{
    [createLand.fulfilled.type]: (state, action: PayloadAction<LandFormData>) => {
      state.lands.push(action.payload)
    },
  }
})
