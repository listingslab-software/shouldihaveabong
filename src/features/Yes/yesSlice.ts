import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface YesState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: YesState = {
  value: 0,
  status: 'idle',
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
