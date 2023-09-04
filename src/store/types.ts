
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
    payload:IBoardDataId,
    type:string
}
export interface IActiongetAllBoards{
    payload:IBoardDataId
    type:string
}
export interface IBoardDataId{
    id: string
    navigate:(to: string, options?: object) => void;
}
