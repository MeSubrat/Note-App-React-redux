import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./NoteSlice";
import modalSlice from "./ModalSlice";
import editSlice from "./EditSlice";

const noteStore=configureStore({
    reducer:{
        notes:noteSlice.reducer,
        ModalSlice:modalSlice.reducer,
        editSlice:editSlice.reducer
    }
})
export default noteStore;