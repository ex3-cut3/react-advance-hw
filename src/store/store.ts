import {combineReducers, configureStore} from "@reduxjs/toolkit";
//import tripReducer from './reducers/TripsSlice'
import {tripAPI} from "../services/TripsService";
import {loggingAPI} from "../services/AuthService";
import {bookingsAPI} from "../services/BookingsService";

const rootReducer = combineReducers({
   //tripReducer,
   [tripAPI.reducerPath]: tripAPI.reducer,
   [loggingAPI.reducerPath]: loggingAPI.reducer,
   [bookingsAPI.reducerPath]: bookingsAPI.reducer
})

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(tripAPI.middleware).concat(loggingAPI.middleware).concat(bookingsAPI.middleware)
   })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
