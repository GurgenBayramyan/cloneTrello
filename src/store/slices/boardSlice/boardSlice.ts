import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IBoardData,
  IBoardInitialState,
  ICurrentGetBoardData,
} from "./boarSliceTypes";
import { urlBassic } from "types/constants";

const initialState: IBoardInitialState = {
  boardData: [],
  currentBoard: {},
  error: false,
  allBoardsData: [],
  changeBoard:{},
  url:urlBassic,
  loading:false
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
    setLoadingCreateAndChange:(state,{payload}:PayloadAction<Partial<boolean>>) => {
      state.loading = payload
    },
    setCurrentLoading:(state,{payload}:PayloadAction<Partial<boolean>>) => {
      state.currentBoard.loading = payload
    }
   
  },
});
export default boardSlice;
export const {
  setBoardData,
  setCurrentBoardData,
  setError,
  setAllBoards,
  setCurrentBoard,
  addBoards,
  setUrl,
  setChangeBoard,
  setChangeCurrentBoard,
  setLoadingCreateAndChange,
  setCurrentLoading
} = boardSlice.actions;
