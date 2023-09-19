export enum RespStatus {
  request = "OK",
}
interface IErrorcase {
  message?: string;
}

export interface IErrorObjectForAlert {
  age?: IErrorcase;
  email?: IErrorcase;
  firstName?: IErrorcase;
  genders?: IErrorcase;
  lastname?: IErrorcase;
  password?: IErrorcase;
  repeatPassword?: IErrorcase;
}
export enum PageLocation {
  CREATEMENU = "CreateMenu",
  CREATEBOARD = "CreateBoard",
}
export enum Menus {
  WORKSPACE = "Workspace",
  PRIVATE = "Private",
  PUBLIC = "Public",
}
export enum StatusCode {
  OK = 200,
}

export interface ISetAllListSaga {
  id: string;
}
export interface ICreateListSaga {
  id: string;
  fieldName: string;
  changeLoading: () => void;
  handleChangeActive: () => void
}

export interface IDeleteListSaga {
  listid: string;
  boardId: string;
  changeLoading: () => void;
}
export interface IChangeListSaga {
  listid: string;
  name: string;
  boardId: string;
}
