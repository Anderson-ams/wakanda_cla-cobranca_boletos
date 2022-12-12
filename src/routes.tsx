import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Boleto from './pages/Boleto';
import Cliente from './pages/Cliente';
import Cobranca from './pages/Cobranca';
import HomePage from './pages/HomePage';
import ListaDeDados from './pages/ListaDeDados/index';
import BoletosFiltrados from './pages/ListaDeDadosFilter';
import PaginaTeste from './pages/PaginaTeste';

export default function Rotas() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/todosClientes" element={<ListaDeDados />} />
                    <Route path="/cliente" element={<Cliente />} />
                    <Route path='/boleto' element={<Boleto />} />
                    <Route path='/cobranca' element={<Cobranca />} />
                    <Route path='/filtroBoletos' element={<BoletosFiltrados />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}