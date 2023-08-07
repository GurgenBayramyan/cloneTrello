import { RootState } from "store";

export const setShowOptionDivSelector = (state:RootState) => state.setShowOptionDiv
export const setShowMenuUserSelector = (state:RootState)=>state.showMenuUser
export const contentSliceSelector = (state:RootState)=>state.contentSlice
export const taskSettingsSliceSelector =  (state:RootState) => state.taskSettingsSlice
export const modalBlockSelector = (state:RootState) => state.modallMeniu
export const visibilitySelector = (state:RootState) => state.workspaceSlice