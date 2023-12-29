import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../utils/const";
import { EntityState } from "../../types/types";
import { createEntity } from "./api-action";


const initialState: EntityState = {
  entity: []
}

export const entityData = createSlice({
  name: NameSpace.Entity,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createEntity.fulfilled, (state, action) => {
        state.entity.push(action.payload)
      })
  }
})
