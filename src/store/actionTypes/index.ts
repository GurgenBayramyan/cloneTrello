import { createAction } from "@reduxjs/toolkit";
import {  IPayloadBoardData } from "store/types";


export const getUserDataAction = createAction("getUserDataAction")
export const setBoardDataAction = createAction<IPayloadBoardData>("setBoardDataAction")
export const getBoardDataAction = createAction<string>("getBoardData")
export const getAllBoardsAction = createAction("getAllBoards")
export const deleteBoardAction = createAction<{id:number,navigate:(to: string, options?: object) => void;}>("deleteBoard")
export const setBoardDataChangeAction = createAction<IPayloadBoardData>("setBoardDataChangeAction")