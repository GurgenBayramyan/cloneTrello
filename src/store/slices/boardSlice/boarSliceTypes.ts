export interface IBoardData {
  id: number;
  name: string;
  sortId: number;
  userId: number;
  background?:string
}

export interface IBoardInitialState {
  loading: boolean;
  boardData: IBoardData[];
  currentBoard:ICurrentGetBoardData;
  error:boolean
  allBoardsData:IBoardData[]
  upDate:boolean
}
export interface ICurrentGetBoardData {
  background?: string
  id?: number
  name?: string
  sortId?: number
  userId?: number
  error?:object
}

