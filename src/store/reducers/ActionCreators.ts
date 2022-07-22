export default 0;
/*
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Trip} from "../../models/trip";

export const fetchTrips = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
       try {
          const response = await axios.get<Trip[]>('https://travel-app-api.glitch.me/api/v1/trips')
          return response.data;
       } catch (e) {
          return thunkAPI.rejectWithValue("Unable to find trips! Check the URL")
       }
    }
)
*/
