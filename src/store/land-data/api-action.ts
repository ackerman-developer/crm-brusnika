import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "..";
import { AxiosInstance } from "axios";
import { LandFormData } from "../../types/types";
import { ApiRoute } from "../../utils/const";

export const createLand = createAsyncThunk<
  LandFormData,
  LandFormData,
  { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }
>('lands', async (_arg, { extra: api }) => {
  const { data } = await api.post<LandFormData>(ApiRoute.Lands)
  return data
})

console.log(createLand)

export const fetchLands = createAsyncThunk<
  LandFormData,
  undefined,
  { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }
>('lands',
  async (_arg, { extra: api }) => {
  const { data } = await api.get<LandFormData>(ApiRoute.Lands)
  return data
})
