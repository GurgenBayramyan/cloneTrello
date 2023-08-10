import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IBoardData,
  IBoardInitialState,
  ICurrentGetBoardData,
} from "./boarSliceTypes";

const initialState: IBoardInitialState = {
  loading: false,
  boardData: [],
  currentBoard: {},
  error: false,
};

const boardSlice = createSlice({
  name: "boardSlice",
  initialState,
  reducers: {
    setBoardData: (state, { payload }: PayloadAction<IBoardData>) => {
      state.boardData = [...state.boardData, payload];
    },
    setCurrentBoardData: (
      state,
      { payload }: PayloadAction<ICurrentGetBoardData>
    ) => {
      state.currentBoard = { ...payload };
    },
    loading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setError: (state, { payload }: PayloadAction<boolean>) => {
      state.error = payload;
    },
  },
});
export default boardSlice;
export const { setBoardData, setCurrentBoardData, loading, setError } =
  boardSlice.actions;
