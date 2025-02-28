import React, { useEffect, useRef, useState } from 'react'
import './EditNote.css'
import { useDispatch, useSelector } from 'react-redux'
import { noteActions } from '../store/NoteSlice'
import { editActions } from '../store/EditSlice'
import { modalActions } from '../store/ModalSlice'
function EditNote() {
    const isModalOpen = useSelector((state) => state.editSlice.isModalOpen)
    const currentId = useSelector(state => state.editSlice.currentId);
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes.notes) || []
    const [eTitle, setETitle] = useState('')
    const [eDescription, setEDescription] = useState('')
    const note = notes.find(note => note.id === currentId)
    const editRef = useRef();
    const modalRef = useRef();

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
    const closeEditModal = () => {
        dispatch(modalActions.closeModal());
    }

    const handleEditOutSideClick = (e) => {
        if (modalRef.current && !editRef.current.contains(e.target)) {
            dispatch(editActions.closeEditModal())
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleEdit();
        }
    };

    return (
        <>
            {isModalOpen && note &&
                (
                    <div className='popup-window' onClick={(e) => handleEditOutSideClick(e)} ref={modalRef}>
                        <div className='pop-up-content' ref={editRef}>
                            <input type="text" id='title' placeholder='Enter Title' value={eTitle} onChange={(e) => setETitle(e.target.value)} onKeyDown={handleKeyDown} />
                            <textarea name="desc" id="desc" placeholder='Write description' value={eDescription} onChange={(e) => setEDescription(e.target.value)}></textarea>

                            <button onClick={() => handleEdit()}>Save</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default EditNote