import { RootState } from "store";

export const setShowOptionDivSelector = (state:RootState) => state.setShowOptionDiv
export const setShowMenuUserSelector = (state:RootState)=>state.showMenuUser
export const contentSliceSelector = (state:RootState)=>state.contentSlice
export const taskSettingsSliceSelector =  (state:RootState) => state.taskSettingsSlice
export const modalBlockSelector = (state:RootState) => state.modallMeniu
export const popupsSelector = (state:RootState) => state.popupSlice
export const backgroundStateSelector = (state:RootState) => state.popupSlice.backgroundState
export const allBordersSelector = (state:RootState)=>state.boardSlice.allBoardsData
export const idCurrentBoardSelector = (state:RootState)=>state.boardSlice.currentBoard.id