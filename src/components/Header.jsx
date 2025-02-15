import React, { useEffect, useRef, useState } from 'react'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'
import { modalActions } from '../store/ModalSlice';
import { noteActions } from '../store/NoteSlice';
import Content from './Content';
function Header() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [inputText, setInputText] = useState('');
    const isOpen = useSelector((state) => state.ModalSlice.isOpen)
    const dispatch = useDispatch();
    const inputTitle = useRef();
    let notes = useSelector(state => state.notes.notes)
    const modalRef = useRef(null);
    const popUpRef = useRef(null)



    const focusInputTitle = () => {
        inputTitle.current.focus()
    }
    const openModal = () => {
        dispatch(modalActions.openModal())
    }
    const closeModal = () => {
        dispatch(modalActions.closeModal())
    }
    const handleSave = () => {
        dispatch(noteActions.addNote({
            title: title,
            description: desc
        }))
        dispatch(modalActions.closeModal())
        setDesc('')
        setTitle('')
    }
    const handleSearch = () => {
        dispatch(noteActions.searchNote(inputText))
    }
    useEffect(() => {
        handleSearch()
    }, [inputText])
    useEffect(() => {
        if (isOpen) {
            focusInputTitle()
        }
    }, [isOpen])

    const handleOutsideCLick = (e) => {
        if (modalRef.current && modalRef.current.contains(e.target) && !popUpRef.current.contains(e.target)) {
            closeModal();
        }
    }

    return (
        <>
            <div className='header'>
                <h2>NOTES APP</h2>
                <div className='input-elements'>
                    <input type="text" placeholder='Search Notes' readOnly={isOpen} value={inputText} onChange={(e) => setInputText(e.target.value)} />
                    {/* <button onClick={() => handleSearch()}>Search</button> */}
                </div>
                <button onClick={() => openModal()}>
                    Create
                </button>
            </div>

            {
                isOpen && (
                    <div className='popup-window' ref={modalRef} onClick={(e) => handleOutsideCLick(e)}>
                        <div className='pop-up-content' ref={popUpRef}>
                            <input type="text" id='title' placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} ref={inputTitle} />
                            <textarea name="desc" id="desc" placeholder='Write description' wrap='soft' value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>

                            <button onClick={(title || desc) ? () => handleSave() : () => closeModal()}>
                                {
                                    (title || desc) ? 'Save' : 'CLose'
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