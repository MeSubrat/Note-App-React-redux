import React, { useEffect, useState } from 'react'
import './EditNote.css'
import { useDispatch, useSelector } from 'react-redux'
import { noteActions } from '../store/NoteSlice'
import editSlice, { editActions } from '../store/EditSlice'
function EditNote() {
    const isModalOpen = useSelector((state) => state.editSlice.isModalOpen)
    const currentId = useSelector(state => state.editSlice.currentId);
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes.notes)
    const [eTitle, setETitle] = useState('')
    const [eDescription, setEDescription] = useState('')
    const note = notes.find(note => note.id === currentId)

    useEffect(() => {
        if (note) {
            setETitle(note.title)
            setEDescription(note.description)
        }
    }, [note])

    const handleEdit = () => {
        if (!note) return
        dispatch(noteActions.updateNote({
            id: currentId,
            acceptedTitle: eTitle,
            acceptedDescription: eDescription
        }))
        dispatch(editActions.closeEditModal());
    }
    // const handleCancle=()=>{
    //     dispatch(editActions.closeEditModal())
    // }


    return (
        <>
            {isModalOpen && note &&
                (
                    <div className='popup-window'>
                        <div className='pop-up-content'>
                            <input type="text" id='title' placeholder='Enter Title' value={eTitle} onChange={(e) => setETitle(e.target.value)} />
                            <textarea name="desc" id="desc" placeholder='Write description' value={eDescription} onChange={(e) => setEDescription(e.target.value)}></textarea>

                            <button onClick={() => handleEdit()}>Save</button>
                            {/* <button onClick={()=>handleCancle()}>Cancel</button> */}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default EditNote