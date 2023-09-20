export interface IBoardData {
  id: number;
  name: string;
  sortId: number;
  userId: number;
  background?: string;
}

export interface IBoardInitialState {
  error: boolean;
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
