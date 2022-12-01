import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Boleto from './pages/Boleto';
import Cliente from './pages/Cliente';
import Cobranca from './pages/Cobranca';
import HomePage from './pages/HomePage';

export default function Rotas() {
    // const [nomeCliente, setNomeCliente] = useState("")

    return (
        <div>


            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                
                    <Route path="/cliente" element={<Cliente />} />
                    <Route path='/boleto' element={<Boleto />} />
                    <Route path='/cobranca' element={<Cobranca />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}