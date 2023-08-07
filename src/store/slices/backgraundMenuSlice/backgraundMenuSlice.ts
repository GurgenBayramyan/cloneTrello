import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBackgraundSliceInitial } from "./backgraundMenuSliceTypes";

const initialState:IBackgraundSliceInitial = {
    show:true
}


const backgraundSlice = createSlice({
    name:"backgraundSlice",
    initialState,
    reducers:{
        setShowBackgraundBlock:(state,{payload}:PayloadAction<boolean>)=>{
            state.show = payload
        }
    }
})
export default backgraundSlice
export const {setShowBackgraundBlock} = backgraundSlice.actions