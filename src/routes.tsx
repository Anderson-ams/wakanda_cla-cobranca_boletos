import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Boleto from './pages/Boleto';
import HomePage from './pages/HomePage';
import Cliente from './pages/Cliente';
import Cobranca from './pages/Cobranca';
import CollapsibleTable from './pages/PaginaTeste';
import Cabecalho from './components/Cabecalho';
import ListaDeDados from './pages/ListaDeDados';

export default function Rotas() {
    // const [nomeCliente, setNomeCliente] = useState("")

    return (
        <div>


            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/todosClientes" element={<ListaDeDados />} />
                    <Route path="/cliente" element={<Cliente />} />
                    <Route path='/boleto' element={<Boleto />} />
                    <Route path='/cobranca' element={<Cobranca />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}