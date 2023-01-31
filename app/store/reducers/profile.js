import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    name: "None.",
    address: "",
    socialSecurityNumber: "000-00-0000",
    age: "",
    email: ""
  },
  reducers: {
    SET_NAME(state, action) {
      state.name = action.payload
    }
  }
})

export const {SET_NAME} = profileSlice.actions
export default profileSlice.reducer
