import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../utils/const";
import { EntityState } from "../../types/types";
import { createEntity, fetchEntities } from "./api-action";


const initialState: EntityState = {
  uploadEnity: [],
  entities: [],
  isEntitiesDataLoading: false
}

export const entityData = createSlice({
  name: NameSpace.Entity,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createEntity.fulfilled, (state, action) => {
        state.uploadEnity.push(action.payload)
      })
      .addCase(fetchEntities.pending, (state) => {
        state.isEntitiesDataLoading = true
      })
      .addCase(fetchEntities.fulfilled, (state, action) => {
        state.entities = action.payload
        state.isEntitiesDataLoading = false
      })
  }
})
