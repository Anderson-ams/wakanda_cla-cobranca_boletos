import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ClienteContext } from './common/context/Cliente';
import Boleto from './pages/Boleto';
import Cliente from './pages/Cliente';
import Cobranca from './pages/Cobranca';

export default function Rotas() {
    // const [nomeCliente, setNomeCliente] = useState("")

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/cliente" element={<Cliente />} />
                    <Route path='/boleto' element={<Boleto />} />
                    <Route path='/cobranca' element={<Cobranca />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}