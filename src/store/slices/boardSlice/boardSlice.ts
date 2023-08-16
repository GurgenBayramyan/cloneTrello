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
  allBoardsData: [],
  changeBoard:{},
  url:"https://images.unsplash.com/photo-1690692322953-fb0f543c6658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjkxMjQ1MTQ4fA&ixlib=rb-4.0.3&q=80&w=400https://images.unsplash.com/photo-1690692322953-fb0f543c6658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjkxMjQ1MTQ4fA&ixlib=rb-4.0.3&q=80&w=400",
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
    setChangeCurrentBoard: (state,{payload}:PayloadAction<{background:string,name:string}>) => {
      state.currentBoard.background = payload.background
      state.currentBoard.name = payload.name
    },
    loading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setError: (state, { payload }: PayloadAction<boolean>) => {
      state.error = payload;
    },
    setAllBoards: (state, { payload }: PayloadAction<IBoardData[]>) => {
      state.allBoardsData = [...payload];
    },
    setCurrentBoard: (
      state,
      { payload }: PayloadAction<ICurrentGetBoardData>
    ) => {
      state.currentBoard = payload;
    },
    addBoards: (state, { payload }: PayloadAction<IBoardData>) => {
      state.allBoardsData = [...state.allBoardsData,payload];
    },
    setUrl: (state,{payload}:PayloadAction<string>) => {
      state.url = payload
    },
    setChangeBoard: (state,{payload}:PayloadAction<Partial<IBoardData>>) => {
      state.changeBoard = payload
    },
   
  },
});
export default boardSlice;
export const {
  setBoardData,
  setCurrentBoardData,
  loading,
  setError,
  setAllBoards,
  setCurrentBoard,
  addBoards,
  setUrl,
  setChangeBoard,
  setChangeCurrentBoard
} = boardSlice.actions;
