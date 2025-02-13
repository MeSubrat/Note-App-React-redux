import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import { useSelector } from 'react-redux'


function App() {
  const notes = useSelector(state => state.notes.notes)
  return (
    <>
      <Header />
      <Content notes={notes}/>
    </>
  )
}

export default App
