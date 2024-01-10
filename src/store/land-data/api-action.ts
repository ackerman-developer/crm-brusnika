import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "..";
import { AxiosInstance } from "axios";
import { ApiRoute } from "../../utils/const";
import { LandData, LandsDataId } from "../../types/landData";


export const createLand = createAsyncThunk<LandData, LandData, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/createLand',
  async ({registerNumber, address, areaInMeters, aboutHolder, price, whoIsFound}, {extra: api}) => {
    const {data} = await api.post<LandData>(ApiRoute.Lands, {registerNumber, address, areaInMeters, aboutHolder, price, whoIsFound})
    return data
  },
)

export const fetchLands = createAsyncThunk<LandsDataId[], undefined, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchLands',
  async (__arg, {extra: api}) => {
    const {data} = await api.get<LandsDataId[]>(ApiRoute.Lands)
    return data
  },
)

export const fetchLandsByID = createAsyncThunk<LandsDataId[], {id: string}, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/fetchLandsByID',
  async ({id}, {extra: api}) => {
    const {data} = await api.get<LandsDataId[]>(`${ApiRoute.Lands}/${id}`)
    return data
  },
)

export const editLandByID = createAsyncThunk<LandsDataId[], {id?: string}, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/editLandsByID',
  async ({id}, {extra: api}) => {
    const {data} = await api.put<LandsDataId[]>(`${ApiRoute.Lands}/${id}`)
    return data
  },
)

export const deleteLandByID = createAsyncThunk<void, string, {
  dispatch: AppDispatch
  state: RootState
  extra: AxiosInstance
}>(
  'data/deleteLandByID',
  async (id, { extra: api }) => {
    await api.delete(`${ApiRoute.Lands}/${id}`)
  }
)
