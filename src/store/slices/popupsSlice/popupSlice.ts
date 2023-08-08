import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IStateBlock, IWorkspaceInitial } from "./popupSliceTypes";
import { Menus, PageLocation } from "types";
const initialState: IWorkspaceInitial = {
  workspace: {
    show: false,
    currentTop: 0,
    currentLeft: 0,
    content: Menus.WORKSPACE,
  },
  menuState:{
    menuBlock:PageLocation.CREATEMENU,
    menuActive:false
  },
  backgroundState:{
    show:false,
    top: 0,
    right: 0
  },
  className:""
};
const popupSlice = createSlice({
    name:"popupSlice",
    initialState,
    reducers:{
        changeContent: (state,{payload}:PayloadAction<string>) =>{
            state.workspace.content = payload
        },
        setPosition: (state,{payload}:PayloadAction<{top:number,left:number}>)=>{
            state.workspace.currentTop = payload.top
            state.workspace.currentLeft = payload.left
        },
        setClose:(state,{payload}:PayloadAction<boolean>) => {
            state.workspace.show = payload
        },
        openCreateSection:(state,{payload}:PayloadAction<IStateBlock>) => {
            state.menuState.menuActive = payload.menuActive
            state.menuState.menuBlock = payload.menuBlock
        },
        goToMain:(state,{payload}:PayloadAction<string>)=>{
            state.menuState.menuBlock = payload
        },
        goToCreateBoard:(state) => {
            state.menuState.menuBlock =PageLocation.CREATEBOARD
        },
        openBackMenuBlock: (state,{payload}:PayloadAction<boolean>) => {
          state.backgroundState.show = payload
        },
        closeMenu : (state) => {
          state.menuState.menuActive = false
        },
        setPositionCurrent: (state,{payload}:PayloadAction<{top:number,right:number}>) => {
          state.backgroundState.top = payload.top - 188
          state.backgroundState.right = payload.right
        },
        setClassName: (state,{payload}:PayloadAction<string>) => {
          state.className = payload
        }

    }
})

export default popupSlice;
export const {
  changeContent,
  setPosition,
  setClose,
  openCreateSection,
  goToMain,
  goToCreateBoard,
  openBackMenuBlock,
  closeMenu,
  setPositionCurrent,
  setClassName
} = popupSlice.actions;