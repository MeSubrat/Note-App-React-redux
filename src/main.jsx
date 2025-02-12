import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import noteStore from './store/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={noteStore}>
      <App></App>
    </Provider>
  </StrictMode>,
)
