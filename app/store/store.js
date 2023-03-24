import { combineReducers, configureStore } from '@reduxjs/toolkit'
import profileReducer from './reducers/profile'
import placesReducer from './reducers/places'
import calendarEventsReducer from './reducers/calendar-events'
import nameColorReducer from './reducers/name-color'

const rootReducer = combineReducers({
  profile: profileReducer,
  places: placesReducer,
  calendarEvents: calendarEventsReducer,
  nameColor: nameColorReducer
})

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})