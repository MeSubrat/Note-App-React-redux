import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

function App() {
  let allNotes = useSelector(state => state.notes.notes) || []

  

  useEffect(() => {
    if (allNotes) {
      if (allNotes.length > 0) localStorage.setItem('notes', JSON.stringify(allNotes))
    }
  }, [allNotes])

  return (
    <>
      <Header />
      <Content notes={allNotes} />
    </>
  )
}

export default App
