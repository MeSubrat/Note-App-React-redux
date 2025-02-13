import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NoteCard from './NoteCard'
import './content.css'
import EditNote from './EditNote'

function Content({notes}) {
  const isOpen = useSelector(state => state.ModalSlice.isOpen)
  return (
    <div className='notes-container'>
      {notes.length ?
        notes.map((note) => (
          <div key={note.id}>
            {!isOpen ?
              <NoteCard title={note.title} description={note.description} date={note.date} id={note.id} /> : null}
          </div>
        )) : <div style={{
          height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'
        }}><h3>Currently no notes available.. Please add some note</h3></div>
      }
      <EditNote />
    </div>
  )
}

export default Content