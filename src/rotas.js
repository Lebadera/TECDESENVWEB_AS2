import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './Paginas/Login';
import Cadastro from './Paginas/Cadastro';
import Principal from './Paginas/Principal';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>                
                <Route exact={true} path="/" element={<Login/>} />
                <Route exact={true} path="/Cadastro" element={<Cadastro/>} />
                <Route exact={true} path="/Principal" element={<Principal/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;

