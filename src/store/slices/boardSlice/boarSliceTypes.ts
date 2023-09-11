export interface IBoardData {
  id: number;
  name: string;
  sortId: number;
  userId: number;
  background?: string;
}

export interface IBoardInitialState {
  boardData: IBoardData[];
  currentBoard: ICurrentGetBoardData;
  error: boolean;
  allBoardsData: IBoardData[];
  url: string;
  changeBoard: Partial<IBoardData>;
  loading: boolean;
}
export interface ICurrentGetBoardData {
  background?: string;
  id?: number;
  name?: string;
  sortId?: number;
  userId?: number;
  error?: object;
  loading?: boolean;
}
