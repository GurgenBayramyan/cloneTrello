import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  IList, IListTypes } from "./listSliceTypes";

const initialState: IListTypes = {
   lists: [],
   ListId:null
}
const ListSlice = createSlice({
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
         state.ListId = payload
       }
    }
    
})
export default ListSlice
export const {getAlllists,addList,setListId} = ListSlice.actions