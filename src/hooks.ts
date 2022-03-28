import {
  TypedUseSelectorHook,
  useDispatch as useGenericDispatch,
  useSelector as useGenericSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useDispatch = () => useGenericDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useGenericSelector;
