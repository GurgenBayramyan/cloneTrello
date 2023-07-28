import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemplatesState } from "./templatesTypes";
const initialState:ItemplatesState = {
    top:0,
    left:0,
    show:false
}

const templatesSlice = createSlice({
    name:"templateSlice",
    initialState,
    reducers:{
        getPositionDiv:(state, {payload}:PayloadAction<ItemplatesState>)=>{
            state.top = payload.top 
            state.left = payload.left
            state.show = payload.show
        },
        close:(state)=>{
            state.show = false
        },
        setPosition:(state,{payload}:PayloadAction<ItemplatesState>) => {
            state.top = payload.top
            state.left = payload.left
        }
    }
})
export default templatesSlice;
export const {getPositionDiv,close,setPosition} = templatesSlice.actions
