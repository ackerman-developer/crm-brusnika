import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "..";
import { AxiosInstance } from "axios";
// import { LandFormData } from "../../types/types";
import { ApiRoute } from "../../utils/const";
import { LandData, LandsDataId } from "../../types/landData";
// import { createApi } from "../../api/apiConfig";

// export const createLand = createAsyncThunk<LandFormData, LandFormData,
//   { dispatch: AppDispatch; state: RootState; extra: AxiosInstance
//   }>('lands/create', async (__arg, { extra: api }) => {
//   const { data } = await api.get<LandFormData>(`${ApiRoute.Lands}/create`);
//   return data;
// })

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

// export const fetchLands = createAsyncThunk<
//   LandFormData,
//   undefined,
//   { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }
// >('lands',
//   async (_arg, { extra: api }) => {
//   const { data } = await api.get<LandFormData>(ApiRoute.Lands)
//   return data
// })

// const api = createApi()

// interface IProps{
//   registerNumber: number | null,
//   address: string,
//   areaInMeters: string,
//   aboutHolder: string,
//   price: number | null,
//   whoIsFound: string

// }

// export const createLand = createAsyncThunk(
//   'lands/create',
//   async ({registerNumber, address, areaInMeters, aboutHolder, price, whoIsFound}: IProps, thunkAPI) => {
//     try {
//       const response = await api.post(`${ApiRoute.Lands}/create`, JSON.stringify({
//         registerNumber,
//         address,
//         areaInMeters,
//         aboutHolder,
//         price,
//         whoIsFound
//       }), {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       return response.data
//     } catch (e) {
//       return thunkAPI.rejectWithValue('Не удалось загрузить объект')
//     }
//   }
// )



