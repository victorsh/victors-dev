import { createSlice } from '@reduxjs/toolkit'

const placesSlice = createSlice({
  name: "places",
  initialState: {
    place: "Los Angeles",
    places: []
  },
  reducers: {
    SET_PLACE(state, action) {
      state.place = action.payload
    },
    SET_PLACES: (state, action) => {
      state.places.push(action.payload)
    }
  }
})

export const {SET_PLACE, SET_PLACES} = placesSlice.actions
export default placesSlice.reducer
