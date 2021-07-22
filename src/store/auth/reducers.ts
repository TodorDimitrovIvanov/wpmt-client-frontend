import produce from "immer";
import { AuthActionTypes } from "./types";

type InitialState = {
  isAuthenticated: boolean;
  isLoading: boolean;
};

const initialState: InitialState = {
  isAuthenticated: false,
  isLoading: false,
};

export const authReducer = produce((state, action: AuthActionTypes) => {
  switch (action.type) {
    case "AUTH_START": {
      state.isLoading = true;
      return;
    }
  }
}, initialState);
