import { combineReducers } from "redux";
import contentSlice from "./slices/contentSlice/contentSlice";

export const rootReducer = combineReducers({
    [contentSlice.name] : contentSlice.reducer
})