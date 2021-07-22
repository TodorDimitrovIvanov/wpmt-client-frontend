import { AppState } from "../store/index";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

declare module "react-redux" {
  function useDispatch<
    TDispatch = ThunkDispatch<AppState, void, AnyAction>
  >(): TDispatch;
  function useSelector<TState = AppState, TSelected = unknown>(
    selector: (state: TState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
  ): TSelected;
}
