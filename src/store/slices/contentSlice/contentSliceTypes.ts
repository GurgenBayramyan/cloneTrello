export interface IUserData {
  firstname: string;
  lastname: string;
  genders: string;
  email: string;
  age: string;
}

export interface IContentInitial {
  data: IUserData;
  token: string;
  loading: boolean;
}
