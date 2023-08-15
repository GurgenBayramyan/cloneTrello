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
    menuActive:false,
    currentTop:0,
    currentLeft:0
  },
  backgroundState:{
    show:false,
    top: 0,
    right: 0
  },
 
  optionboard:{
    show: false,
    currentTop: 0,
    currentLeft: 0,
    name:"",
    id:0
  },
  deleteBoard:{
    show:false
  },
  changePopup:{
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
            state.menuState.currentLeft = payload.currentLeft
            state.menuState.currentTop = payload.currentTop
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
        },
        setChangePopUp: (state,{payload}:PayloadAction<boolean>) =>{
          state.changePopup.show = payload
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
  setOptionBoardShow,
  setOptionBoardPosition,
  setDeleteBoardShow,
  setChangePopUp
} = popupSlice.actions;