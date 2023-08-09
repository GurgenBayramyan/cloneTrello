import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { boolean } from "yup";
const initialState = {
    upModalShow:false,
    showModal:false
}
const ModalSlice = createSlice({
    name:"modallMeniu",
    initialState,
    reducers:{
        setShow:(state,{payload}:PayloadAction<boolean>) =>{
            state.upModalShow = payload
        },
        setShowModal : (state,{payload}:PayloadAction<boolean>) =>{
            state.showModal = payload
        }
    }
    
})
export default ModalSlice
export const {setShow,setShowModal} = ModalSlice.actions