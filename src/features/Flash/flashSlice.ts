import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface FlashState {
  uid: string | null;
  counter: number;
}

const initialState: FlashState = {
  uid: null,
  counter: 0,
};

export const flashSlice = createSlice({
  name: 'flash',
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.counter += 1;
    },
  },
});

export const { incrementCounter } = flashSlice.actions;
export const selectFlash = (state: RootState) => state.flash;
export default flashSlice.reducer;
