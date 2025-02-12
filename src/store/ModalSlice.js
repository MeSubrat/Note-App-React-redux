import { createSlice } from "@reduxjs/toolkit";

const modalSlice=createSlice({
    name:'ModalSlice',
    initialState:{
        isOpen:false
    },
    reducers:{
        openModal:(state,action)=>{
            state.isOpen=true
        },
        closeModal:(state,action)=>{
            state.isOpen=false
        }
    }
})
export default modalSlice;
export const modalActions=modalSlice.actions