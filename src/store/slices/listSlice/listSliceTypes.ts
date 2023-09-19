export interface IList {
  name: string;
  boardId: number;
  sortId: string;
  id: number;
}

export interface IRespData {
  categories: [];
}

export interface IListTypes {
  lists: Partial<IList[]>;
  listId: null | string;
}
