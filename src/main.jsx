import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from './greetings.jsx'
import {FavFood,FavPet} from './Favs.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavFood/>
    <FavPet />
  </StrictMode>,
)
