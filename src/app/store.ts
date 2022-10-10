import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import yesReducer from '../Features/Yes/yesSlice';

export const store = configureStore({
  reducer: {
    yes: yesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
