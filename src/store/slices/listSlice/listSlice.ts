import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  IList, IListTypes } from "./listSliceTypes";

const initialState: IListTypes = {
   lists: [],
   listId:null
}
const listSlice = createSlice({
    name:"listSlice",
    initialState,
    reducers:{
       getAlllists:(state:IListTypes,{payload}:PayloadAction<IList[]>)=>{
            state.lists = payload
       },
       addList : (state:IListTypes,{payload}:PayloadAction<IList>)=>{
        state.lists.push(payload)
       },
       setListId:(state,{payload}:PayloadAction<string>) => {
         state.listId = payload
       }
    }
    
})
export default listSlice
export const {getAlllists,addList,setListId} = listSlice.actions