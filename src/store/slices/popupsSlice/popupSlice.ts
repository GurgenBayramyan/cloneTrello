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
  url:"https://images.unsplash.com/photo-1690692322953-fb0f543c6658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjkxMjQ1MTQ4fA&ixlib=rb-4.0.3&q=80&w=400https://images.unsplash.com/photo-1690692322953-fb0f543c6658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjkxMjQ1MTQ4fA&ixlib=rb-4.0.3&q=80&w=400",
  optionboard:{
    show: false,
    currentTop: 0,
    currentLeft: 0,
    name:"",
    id:0
  },
  deleteBoard:{
    show:false
  }
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
        setUrl: (state,{payload}:PayloadAction<string>) => {
          state.url = payload
        },
        setOptionBoardShow:(state,{payload}:PayloadAction<boolean>)=>{
            state.optionboard.show = payload
        },
        setOptionBoardPosition:(state,{payload}:PayloadAction<{top:number,left:number,show:boolean,name:string,id:number}>) => {
          state.optionboard.show = payload.show
          state.optionboard.currentLeft = payload.left
          state.optionboard.currentTop = payload.top + 25
          state.optionboard.name = payload.name
          state.optionboard.id = payload.id
        },
        setDeleteBoardShow:(state,{payload}:PayloadAction<boolean>) => {
          state.deleteBoard.show = payload
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
  setUrl,
  setOptionBoardShow,
  setOptionBoardPosition,
  setDeleteBoardShow
} = popupSlice.actions;