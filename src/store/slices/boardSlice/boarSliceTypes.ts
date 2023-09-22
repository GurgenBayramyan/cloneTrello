import { DictionaryNum } from "@reduxjs/toolkit/dist/entities/models";

export interface IBoardData {
  id: number;
  name: string;
  sortId: number;
  userId: number;
  background?: string;
}
export type EntityId = number | string
export interface Dictionary<T> extends DictionaryNum<T> {
  [id: string]: T | undefined
}
export interface EntityState<T> {
  ids: EntityId[]
  entities: Dictionary<T>
}
export interface IBoardInitialState {
  error: boolean;
  url: string;
  changeBoard: Partial<IBoardData>;
  loading: boolean;
  data :EntityState<IBoardData>
}

