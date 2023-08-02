import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialShowMenu } from "./showMenuSliceTypes";
const initialState:IInitialShowMenu ={
    top:-600,
    left:-600,
    show:false
}
const showMenuUserSlice = createSlice({
    name:"showMenuUser",
    initialState,
    reducers:{
        setMenu:(state, {payload}:PayloadAction<IInitialShowMenu>)=>{
            state.top = payload.top
            state.left = payload.left
            state.show = payload.show
        }
    }
})

export default showMenuUserSlice
export const {setMenu} = showMenuUserSlice.actions