export default 1;
/*import {createSlice, PayloadAction} from "@reduxjs/toolkit";
//import {fetchTrips} from "./ActionCreators";
import {Trip} from "../../models/trip";

interface TripsState {
   users: Trip[];
   isLoading: boolean;
   error: string;
}

const initialState: TripsState = {
   users: [],
   isLoading: false,
   error: '',
}

export const tripsSlice = createSlice({
   name: 'trip',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchTrips.fulfilled.type]: (state, action: PayloadAction<Trip[]>) => {
         state.isLoading = false;
         state.error = ''
         state.users = action.payload;
      },
      [fetchTrips.pending.type]: (state) => {
         state.isLoading = true;
      },
      [fetchTrips.rejected.type]: (state,  action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload
      },
   }
})

export default tripsSlice.reducer;*/
