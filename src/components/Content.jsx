import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NoteCard from './NoteCard'
import './content.css'
import EditNote from './EditNote'

function Content() {
  const notes = useSelector(state => state.notes.notes)
  const isOpen = useSelector(state => state.ModalSlice.isOpen)
  return (
    <div className='notes-container'>
      {
        notes.map((note) => (
          <div key={note.id}>
            {!isOpen ?
              <NoteCard title={note.title} description={note.description} date={note.date} id={note.id} /> : null}
          </div>
        ))
      }
      <EditNote/>
    </div>
  )
}

export default Content