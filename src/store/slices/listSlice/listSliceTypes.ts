import { DictionaryNum } from "@reduxjs/toolkit/dist/entities/models";

export interface IList {
  name: string;
  boardId: number;
  sortId: string;
  id: number;
}
export type EntityId = number | string
export interface Dictionary<T> extends DictionaryNum<T> {
  [id: string]: T | undefined
}
export interface EntityState<T> {
  ids: EntityId[]
  entities: Dictionary<T>
}

export interface IRespData {
  categories: [];
}

export interface IListTypes {
  lists: EntityState<IList>
  loadingList:boolean
}
