import React from 'react'
import ReactDOM from 'react-dom/client'
import SimpleFormApp from './SimpleFormApp'
//import './index.css' **No se requeire porque se va a utilizar bootstrap (enlace en index.html)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleFormApp />
  </React.StrictMode>,
)
