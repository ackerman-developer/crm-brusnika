import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "..";
import { AxiosInstance } from "axios";
import { ApiRoute } from "../../utils/const";
import { EntityData } from "../../types/entityData";

export const createEntity = createAsyncThunk<EntityData, EntityData, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/createEntity',
  async ({landId, juridicalCost, permissiveSide, geotechnicalConditions, availabilityEngineeringNetworks, transportationaAccessibility}, {extra: api}) => {
    const {data} = await api.post<EntityData>(ApiRoute.Entity, {landId, juridicalCost, permissiveSide, geotechnicalConditions, availabilityEngineeringNetworks, transportationaAccessibility})
    return data
  },
)



