import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "..";
import { AxiosInstance } from "axios";
import { LandFormData } from "../../types/types";
import { ApiRoute } from "../../utils/const";

export const createLand = createAsyncThunk<
  LandFormData,
  LandFormData,
  { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }
>('lands/create', async (LandFormData, { extra: api }) => {
  const { data } = await api.post<LandFormData>(
    `${ApiRoute.Land}`,
    LandFormData
  )
  return data
})
