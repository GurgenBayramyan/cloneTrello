import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBoardData, IBoardInitialState, StatusEnums } from "./boarSliceTypes";

const initialState:IBoardInitialState = {
  status: StatusEnums.LOADING,
  boardData: [],
};

const boardSlice = createSlice({
  name: "boardSlice",
  initialState,
  reducers: {
    setBoardData: (state,{payload}:PayloadAction<IBoardData>) => {
        state.status = StatusEnums.SUCSESS
        state.boardData = [...state.boardData, payload]
    }
  },
});
export default boardSlice;
export const {setBoardData} = boardSlice.actions
