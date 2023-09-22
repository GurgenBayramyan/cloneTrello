import { combineReducers } from "redux";
import contentSlice from "./slices/contentSlice/contentSlice";
import taskSettingsSlice from "./slices/taskSettings/taskSettingsSlice";
import showOptionDivSlice from "./slices/showOptiondivSlice/showOptionDivSlice";
import showMenuUserSlice from "./slices/showMenuUserSlice/showMenuUserSlice";
import modalSlice from "./slices/modalSlice/modalSlice";
import popup from "./slices/popupsSlice/popupSlice";
import boardSlice from "./slices/boardSlice/boardSlice";
import ListSlice from "./slices/listSlice/listSlice";



export const rootReducer = combineReducers({
    [contentSlice.name] : contentSlice.reducer,
    [taskSettingsSlice.name] : taskSettingsSlice.reducer,
    [showOptionDivSlice.name] : showOptionDivSlice.reducer,
    [showMenuUserSlice.name]:showMenuUserSlice.reducer,
    [modalSlice.name]:modalSlice.reducer,
    [popup.name]:popup.reducer,
    [boardSlice.name]:boardSlice.reducer,
    [ListSlice.name]:ListSlice.reducer
})