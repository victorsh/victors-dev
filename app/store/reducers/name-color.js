import { createSlice } from '@reduxjs/toolkit'

const nameColorSlice = createSlice({
  name: 'name-color',
  initialState: {
    value: 50,
    actualColor: '#ffffff'
  },
  reducers: {
    SET_NAME_COLOR(state, action) {
      state.value = action.payload
    },
    SET_ACTUAL_COLOR(state, action) {
      state.actualColor = action.payload
    }
  }
})

export const {SET_NAME_COLOR, SET_ACTUAL_COLOR} = nameColorSlice.actions
export default nameColorSlice.reducer
