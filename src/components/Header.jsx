import React, { useState } from 'react'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'
import { modalActions } from '../store/ModalSlice';
import { noteActions } from '../store/NoteSlice';
function Header() {
    const isOpen = useSelector((state) => state.ModalSlice.isOpen)
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(modalActions.openModal())
    }
    const cloeModal = () => {
        dispatch(modalActions.closeModal())
    }


    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const handleSave = () => {
        dispatch(noteActions.addNote({
            title: title,
            description: desc
        }))
        dispatch(modalActions.closeModal())
        setDesc('')
        setTitle('')
    }

    return (
        <>
            <div className='header'>
                <h2>NOTES APP</h2>
                <div className='input-elements'>
                    <input type="text" placeholder='Search Notes' readOnly={isOpen} />
                    <button>Search</button>
                </div>
                <button onClick={() => openModal()}>
                    Create
                </button>
            </div>

            {
                isOpen && (
                    <div className='popup-window'>
                        <div className='pop-up-content'>
                            <input type="text" id='title' placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                            <textarea name="desc" id="desc" placeholder='Write description' value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>

                            <button onClick={(title || desc)?()=>handleSave():()=>cloeModal()}>
                                {
                                    (title || desc)?'Save':'X'
                                }
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Header