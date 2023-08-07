import { combineReducers } from "redux";
import contentSlice from "./slices/contentSlice/contentSlice";
import taskSettingsSlice from "./slices/taskSettings/taskSettingsSlice";
import showOptionDivSlice from "./slices/showOptiondivSlice/showOptionDivSlice";
import showMenuUserSlice from "./slices/showMenuUserSlice/showMenuUserSlice";
import ModalSlice from "./slices/modalSlice/modalSlice";
import workspaceSlice from "./slices/workspaceSlice/workspaceSlice";
import backgraundSlice from "./slices/backgraundMenuSlice/backgraundMenuSlice";


export const rootReducer = combineReducers({
    [contentSlice.name] : contentSlice.reducer,
    [taskSettingsSlice.name] : taskSettingsSlice.reducer,
    [showOptionDivSlice.name] : showOptionDivSlice.reducer,
    [showMenuUserSlice.name]:showMenuUserSlice.reducer,
    [ModalSlice.name]:ModalSlice.reducer,
    [workspaceSlice.name]:workspaceSlice.reducer,
    [backgraundSlice.name]:backgraundSlice.reducer
})