import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CTAState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CTAState = {
  value: 0,
  status: 'idle',
};

export const ctaSlice = createSlice({
  name: 'cta',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = ctaSlice.actions;
export const selectCTA = (state: RootState) => state.cta;
export default ctaSlice.reducer;
