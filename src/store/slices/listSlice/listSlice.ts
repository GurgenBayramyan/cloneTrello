import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { IList, IListTypes } from "./listSliceTypes";

export const listAdapter = createEntityAdapter<IList>({
  selectId: (list) => list.id,
});

const initialState: IListTypes = {
  lists: listAdapter.getInitialState(),
  loadingList:false
};

const listSlice = createSlice({
  name: "listSlice",
  initialState,
  reducers: {
    getAlllists: (state: IListTypes, { payload }: PayloadAction<IList[]>) => {
      listAdapter.setAll(state.lists, payload)
    },
    addList: (state: IListTypes, { payload }: PayloadAction<IList>) => {
      listAdapter.addOne(state.lists,payload)
    },
    upDateList: (state:IListTypes,{payload}) =>{
      listAdapter.updateOne(state.lists, { id: payload.id, changes: payload });
    },
    listDelete: (state:IListTypes,{payload}) =>{
      listAdapter.removeOne(state.lists,payload)
    },
    setLoading:(state,{payload}:PayloadAction<boolean>) => {
      state.loadingList = payload
    }
  },
});
export default listSlice;
export const { getAlllists, addList,  upDateList, listDelete ,setLoading} = listSlice.actions;
