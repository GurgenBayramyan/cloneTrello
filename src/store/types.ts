import { IBoardData } from "./slices/boardSlice/boarSliceTypes";

export interface IPayloadBoardData{
    boardTitle: string
    navigate:(to: string, options?: object) => void;
    bg:string
    id?:number,
    patch?:string
}

export interface IActionCreateBoardSaga{
    payload:IPayloadBoardData
    type:string
}
export interface IActionGetBoardDatas{
    payload:string
    type:string
}
export interface IActiongetAllBoards{
    payload:IBoardData[]
    type:string
}
