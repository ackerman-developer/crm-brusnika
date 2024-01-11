import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "..";
import { AxiosInstance } from "axios";
import { ApiRoute } from "../../utils/const";
import { EntityData, EntityDataId } from "../../types/entityData";

export const createEntity = createAsyncThunk<EntityData, EntityData, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/createEntity',
  async ({landId, juridicalCost, permissiveSide, geotechnicalConditions, availabilityEngineeringNetworks, transportationaAccessibility}, {extra: api}) => {
    const {data} = await api.post<EntityData>(ApiRoute.Entity, {
      landId,
      juridicalCost,
      permissiveSide,
      geotechnicalConditions,
      availabilityEngineeringNetworks,
      transportationaAccessibility
    })
    return data
  },
)

export const fetchEntities = createAsyncThunk<EntityDataId[], undefined, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchEntities',
  async (__arg, {extra: api}) => {
    const {data} = await api.get<EntityDataId[]>(ApiRoute.Entity)
    return data
  },
)



