import {  PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISetingsDiv } from "./showOptionDivSliceTypes";



const initialState:ISetingsDiv  = {
   show:true
};

const showOptionDivSlice = createSlice({
    name:"setShowOptionDiv",
    initialState,
    reducers:{
        setShowOptionDiv:(state, {payload}:PayloadAction<boolean>)=>{
            state.show = payload
        }
    }
})
export  default showOptionDivSlice
export const {setShowOptionDiv} = showOptionDivSlice.actions