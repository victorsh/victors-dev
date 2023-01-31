import { combineReducers, configureStore } from '@reduxjs/toolkit'
import profileReducer from './reducers/profile'
import placesReducer from './reducers/places'

const rootReducer = combineReducers({
  profile: profileReducer,
  places: placesReducer
})

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})