import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface SharedState {
  uid: string | null;
  counter: number;
}

const initialState: SharedState = {
  uid: null,
  counter: 0,
};

export const sharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.counter += 1;
    },
  },
});

export const { incrementCounter } = sharedSlice.actions;
export const selectShared = (state: RootState) => state.shared;
export default sharedSlice.reducer;
