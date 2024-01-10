import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/const';
import { UserData } from '../../types/userData';

const initialState: UserData = {
  login: '',
  password: ''
}

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUser(state, action) {
      state.login = action.payload
      state.password = action.payload
    },
    removeUser(state) {
      state.login = ''
      state.password = ''
    }
  }
})

export const {setUser, removeUser} = userData.actions


