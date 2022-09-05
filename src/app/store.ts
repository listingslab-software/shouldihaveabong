import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ctaReducer from '../features/CTA/ctaSlice';
import flashReducer from '../features/Flash/flashSlice';
import sharedReducer from '../features/Shared/sharedSlice';
import yesReducer from '../features/Yes/yesSlice';

export const store = configureStore({
  reducer: {
    cta: ctaReducer,
    flash: flashReducer,
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
