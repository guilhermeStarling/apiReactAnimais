import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gatos from './pages/gatos'
import Cachorros from './pages/cachorros'
import Aves from './pages/aves'
import Header from './header/header.jsx'

function Routes() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                    <Route path="/" element={ <Gatos /> }></Route>
                    <Route path="/cachorro" element={ <Cachorros /> }></Route>
                    <Route path="/aves" element={ <Aves /> }></Route>    
            </Routes>
        </BrowserRouter>
    )
}

export default Routes