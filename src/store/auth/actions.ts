import { ThunkDispatch } from "redux-thunk";

import { AppState } from "../index";
import { AUTH_START, AuthActionTypes } from "./types";

type AuthThunkDispatch = ThunkDispatch<AppState, unknown, AuthActionTypes>;

export const login = () => async (dispatch: AuthThunkDispatch) => {
  dispatch({
    type: AUTH_START,
  });

  //   const authSuccessful = await login();

  //   dispatch({
  //     type: authSuccessful ? AUTH_SUCCESS : AUTH_FAIL,
  //   });
};
