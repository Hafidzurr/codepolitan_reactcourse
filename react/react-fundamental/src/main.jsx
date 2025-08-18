// entry point atau pertama kali dipanggil
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //for dev app react
 // komponen yang di import, dan di render dengan react dom
  <StrictMode> 
    
    <App /> 
  </StrictMode>,
)
