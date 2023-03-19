import { createSlice } from '@reduxjs/toolkit'

const calendarEventsSlice = createSlice({
  name: "calendar-events",
  initialState: {
    events: []
  },
  reducers: {
    SET_CALENDAR_EVENTS(state, action) {
      state.events = action.payload
    }
  }
})

export const {SET_CALENDAR_EVENTS} = calendarEventsSlice.actions
export default calendarEventsSlice.reducer
