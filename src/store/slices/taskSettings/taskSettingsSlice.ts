import {  PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITaskSettingsSlice } from "./taskSettingsSliceTypes";


const initialState:ITaskSettingsSlice  = {
    currentLeft:0,
    currentTop:0,
};

const taskSettingsSlice = createSlice({
    name:"taskSettingsSlice",
    initialState,
    reducers:{
        setStyles:(state, {payload}:PayloadAction<ITaskSettingsSlice>)=>{
            state.currentLeft = payload.currentLeft
            state.currentTop = payload.currentTop
        }
    }
})

export default taskSettingsSlice
export const {setStyles} = taskSettingsSlice.actions
