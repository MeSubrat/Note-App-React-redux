import { createSlice } from "@reduxjs/toolkit";

const editSlice=createSlice({
    name:'editSlice',
    initialState:{
        isModalOpen:false,
        currentId:0
    },
    reducers:{
        setCurrentId: (state, action) => {
            state.currentId = action.payload;
        },
        openEditModal:(state,action)=>{
            state.isModalOpen=true
        },
        closeEditModal:(state,action)=>{
            state.isModalOpen=false
        }
    }
})

export default editSlice;
export const editActions=editSlice.actions