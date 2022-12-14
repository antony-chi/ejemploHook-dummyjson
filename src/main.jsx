import { StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
/* components*/
import App from './components/App'
/* styles*/
import 'bootstrap/dist/css/bootstrap.css'
import './styles/index.css'
/* import Docs from './components/Docs' */
const root =  createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
