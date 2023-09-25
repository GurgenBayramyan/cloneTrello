import { createAction } from "@reduxjs/toolkit";
import { IBoardDataId, IDeleteBoardAction, IPayloadBoardData } from "store/types";
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
export const deleteBoardAction = createAction<IDeleteBoardAction>("deleteBoard");
export const setBoardDataChangeAction = createAction<IPayloadBoardData>(
  "setBoardDataChangeAction"
);
export const setAllListAction = createAction<ISetAllListSaga>("setAllLists");
export const createListAction = createAction<ICreateListSaga>("createList");
export const deleteListAction = createAction<IDeleteListSaga>("deleteList");
export const changeListAction = createAction<IChangeListSaga>("changeList");
