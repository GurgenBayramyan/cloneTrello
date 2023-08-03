import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
    upModalShow:false
}
const ModalSlice = createSlice({
    name:"modallMeniu",
    initialState,
    reducers:{
        setShow:(state,{payload}:PayloadAction<boolean>) =>{
            state.upModalShow = payload
        }
    }
})
export default ModalSlice
export const {setShow} = ModalSlice.actions