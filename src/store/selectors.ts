import { RootState } from "store";
import { boardsAdapter } from "./slices/boardSlice/boardSlice";
import { listAdapter } from "./slices/listSlice/listSlice";

export const setShowOptionDivSelector = (state: RootState) =>
  state.setShowOptionDiv;
export const setShowMenuUserSelector = (state: RootState) => state.showMenuUser;
export const contentSliceSelector = (state: RootState) => state.contentSlice;
export const taskSettingsSliceSelector = (state: RootState) =>
  state.taskSettingsSlice;
export const modalBlockSelector = (state: RootState) => state.modallMeniu;
export const popupsSelector = (state: RootState) => state.popupSlice;
export const backgroundStateSelector = (state: RootState) =>
  state.popupSlice.backgroundState;
export const boardSliceSelector = (state: RootState) => state.boardSlice;
export const listSliceSelector = (state: RootState) => state.listSlice;
export const boardsSelector = boardsAdapter.getSelectors<RootState>(
  (state) => state.boardSlice.data
);
export const listSelector = listAdapter.getSelectors<RootState>(
  (state) => state.listSlice.lists
);
