import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import wordpressReducer from '../slices/wordpressSlice'

export const store = configureStore({
  reducer: {
    wordpress: wordpressReducer
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
