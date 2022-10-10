import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {YesState} from "./YesTypes"

const initialState: YesState = {
  value: 0,
  status: "idle",
  endpoint: "https://us-central1-listingslab-app.cloudfunctions.net/API/bongs",
  fetched: false,
  fetching: false,
};

export const yesSlice = createSlice({
  name: 'yes',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = yesSlice.actions;
export const selectYes = (state: RootState) => state.yes;

export default yesSlice.reducer;
