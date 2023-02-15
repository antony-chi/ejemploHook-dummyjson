import { Routes, Route} from 'react-router-dom'
import App from '../components/App'
import { Menu } from '../components/Menu'
import { UserDetail } from '../components/UserDetail'


export default function Paths (){
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<h2>About</h2>} />
                <Route path="/portafolio" element={<h2>Portafolio</h2>} />
                <Route path="/contact" element={<h2>Contact</h2>} />
                <Route path='/user/:idUser' element={<UserDetail /> } />
            </Routes>
        </>
    )

}