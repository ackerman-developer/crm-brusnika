import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/const';
import { UserData } from '../../types/userData';

const initialState: UserData = {
  login: null,
  password: null
}

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.login = action.payload
      state.password = action.payload
    },
    removeUser(state) {
      state.login = null
      state.password = null
    }
  }
})

export const {setUser, removeUser} = userData.actions


