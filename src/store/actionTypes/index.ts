import { createAction } from "@reduxjs/toolkit";
import { IBoardDataId, IPayloadBoardData } from "store/types";
import {
  IChangeListSaga,
  ICreateListSaga,
  IDeleteListSaga,
  ISetAllListSaga,
} from "types";

export const getUserDataAction = createAction("getUserDataAction");
export const setBoardDataAction =
  createAction<IPayloadBoardData>("setBoardDataAction");
export const getBoardDataAction = createAction<IBoardDataId>("getBoardData");
export const getAllBoardsAction = createAction("getAllBoards");
export const deleteBoardAction = createAction<{
  currentid: number;
  navigate: (to: string, options?: object) => void;
  id:string
}>("deleteBoard");
export const setBoardDataChangeAction = createAction<IPayloadBoardData>(
  "setBoardDataChangeAction"
);
export const setAllListAction = createAction<ISetAllListSaga>("setAllLists");
export const createListAction = createAction<ICreateListSaga>("createList");
export const deleteListAction = createAction<IDeleteListSaga>("deleteList");
export const changeListAction = createAction<IChangeListSaga>("changeList");
