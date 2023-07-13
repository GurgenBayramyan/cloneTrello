import {  createSlice } from "@reduxjs/toolkit";
import { IContentInitial} from "./contentSliceTypes";

const initialState: IContentInitial = {
  data: {
    firstname: "",
    lastname: "",
    genders: "",
    email: "",
    age: "",
  },
};

const contentSlice = createSlice({
    name:"contentSlice",
    initialState,
    reducers:{
        setUserData:(state,{payload})=>{
            state.data =  payload
        }
    }
})
export default contentSlice
export const{setUserData} = contentSlice.actions

