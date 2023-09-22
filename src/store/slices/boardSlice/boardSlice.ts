import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { IBoardData, IBoardInitialState } from "./boarSliceTypes";
import { urlBassic } from "types/constants";

export const boardsAdapter = createEntityAdapter<IBoardData>({
  selectId: (board) => board.id,
});

const initialState: IBoardInitialState = {
  error: false,
  changeBoard: {},
  url: urlBassic,
  loading: false,
  data:boardsAdapter.getInitialState(),
};


const boardSlice = createSlice({
  name: "boardSlice",
  initialState,
  reducers: {
    updateBoard: (state, { payload }) => {
      boardsAdapter.updateOne(state.data, { id: payload.id, changes: payload });
    },
    boardDelete: (state, { payload }) => {
      boardsAdapter.removeOne(state.data, payload);
    },
    setAllBoards: (state, { payload }: PayloadAction<IBoardData[]>) => {
      boardsAdapter.setAll(state.data, payload);
    },
    setUrl: (state, { payload }: PayloadAction<string>) => {
      state.url = payload;
    },
    setChangeBoard: (
      state,
      { payload }: PayloadAction<Partial<IBoardData>>
    ) => {
      state.changeBoard = payload;
    },
    setLoadingCreateAndChange: (
      state,
      { payload }: PayloadAction<Partial<boolean>>
    ) => {
      state.loading = payload;
    },
  },
});
export default boardSlice;
export const {
  setAllBoards,
  setUrl,
  setChangeBoard,
  setLoadingCreateAndChange,
  updateBoard,
  boardDelete
} = boardSlice.actions;
