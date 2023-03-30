import { createSlice } from '@reduxjs/toolkit'

const nameColorSlice = createSlice({
  name: 'name-color',
  initialState: {
    sliderValue: 50,
    actualColor: '#ffffff'
  },
  reducers: {
    SET_NAME_COLOR(state, action) {
      state.sliderValue = action.payload
    },
    SET_ACTUAL_COLOR(state, action) {
      state.actualColor = action.payload
    }
  }
})

export const {SET_NAME_COLOR, SET_ACTUAL_COLOR} = nameColorSlice.actions
export default nameColorSlice.reducer
