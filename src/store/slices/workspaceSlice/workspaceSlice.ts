import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IWorkspaceInitial } from "./workspaceSliceTypes";
const initialState:IWorkspaceInitial = {
    show:false,
    currentTop:0,
    currentLeft:0,
    content:"Workspace"
}
const workspaceSlice = createSlice({
    name:"workspaceSlice",
    initialState,
    reducers:{
        changeContent: (state,{payload}:PayloadAction<string>) =>{
            state.content = payload
        },
        setPosition: (state,{payload}:PayloadAction<{top:number,left:number}>)=>{
            state.currentTop = payload.top
            state.currentLeft = payload.left
        },
        setClose:(state,{payload}:PayloadAction<boolean>) => {
            state.show = payload
        }
    }
})

export default workspaceSlice
export const {changeContent,setPosition,setClose} = workspaceSlice.actions