import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import wordpressReducer from '../slices/wordpressSlice'
import appReducer from '../slices/appSlice'
import userReducer from '../slices/userSlice'
import websiteReducer from '../slices/websiteSlice'

export const store = configureStore({
  reducer: {
    wordpress: wordpressReducer,
    app: appReducer,
    user: userReducer,
    website: websiteReducer
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
