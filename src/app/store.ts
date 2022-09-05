import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ctaReducer from '../features/CTA/ctaSlice';
import sharedReducer from '../features/Shared/sharedSlice';
import yesReducer from '../features/Yes/yesSlice';

export const store = configureStore({
  reducer: {
    cta: ctaReducer,
    shared: sharedReducer,
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
