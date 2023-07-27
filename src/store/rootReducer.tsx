import { combineReducers } from "redux";
import contentSlice from "./slices/contentSlice/contentSlice";
import taskSettingsSlice from "./slices/taskSettings/taskSettingsSlice";
import showOptionDivSlice from "./slices/showOptiondivSlice/showOptionDivSlice";
import showMenuUserSlice from "./slices/ShowMenuUserSlice/showMenuUserSlice";

export const rootReducer = combineReducers({
    [contentSlice.name] : contentSlice.reducer,
    [taskSettingsSlice.name] : taskSettingsSlice.reducer,
    [showOptionDivSlice.name] : showOptionDivSlice.reducer,
    [showMenuUserSlice.name]:showMenuUserSlice.reducer
})