import { createAction } from "@reduxjs/toolkit";
import { IPayloadBoardData } from "store/types";


export const getUserDataAction = createAction("getUserDataAction")
export const setBoardDataAction = createAction<IPayloadBoardData>("setBoardDataAction")