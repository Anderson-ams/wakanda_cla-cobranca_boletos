import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ClienteContext } from './common/context/Cliente';
import Boleto from './pages/Boleto';
import CadastrosLista from './pages/Lista';
import Cliente from './pages/Cliente';
import Cobranca from './pages/Cobranca';
import CollapsibleTable from './pages/PaginaTeste';

export default function Rotas() {
    // const [nomeCliente, setNomeCliente] = useState("")

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/teste" element={<CollapsibleTable />} />
                    <Route path="/" element={<CadastrosLista />} />
                    <Route path="/cliente" element={<Cliente />} />
                    <Route path='/boleto' element={<Boleto />} />
                    <Route path='/cobranca' element={<Cobranca />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}