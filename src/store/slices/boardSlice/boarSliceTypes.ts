export interface IBoardData {
  id: number;
  name: string;
  sortId: number;
  userId: number;
}
export enum StatusEnums{
    LOADING = "loading",
    SUCSESS =  "succes",
    ERROR = "error"
}
export interface IBoardInitialState{
    status: StatusEnums,
    boardData: IBoardData[]
}