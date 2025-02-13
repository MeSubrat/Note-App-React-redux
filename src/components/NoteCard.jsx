import React, { useState } from 'react'
import './NoteCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { noteActions } from '../store/NoteSlice'
import { editActions } from '../store/EditSlice';

function NoteCard( {title, description, date, id, isEdited} ) {
    const dispatch=useDispatch();
    const handleEdit=()=>{
        dispatch(editActions.setCurrentId(id))
        dispatch(editActions.openEditModal())
    }
    const handleDelete=()=>{
        dispatch(noteActions.removeNote(id))
    }

    return (
        <>
            <div className='card'>
                <div className='sec-1'>
                    <h4>{title}</h4>
                    <div className='date-edited-or-not'>
                        <p>{date}</p>
                        {
                            
                            isEdited?<p>Edited</p>:null
                        }
                    </div>
                    
                </div>
                <p className='desc'>{description}</p>
                <div className="btns">
                    <button onClick={()=>handleEdit()}>Edit</button>
                    <button onClick={()=>handleDelete()}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default NoteCard