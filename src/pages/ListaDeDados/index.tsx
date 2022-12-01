import { Box } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import TabelaDTO from '../../components/Tabelas/TabelaDTO';
import IAgregadosDeClientes from '../../core/AgregadosCliente/AgregadosDeCliente';

// import { Container } from './styles';

const ListaDeDados = () => {
    const [lsitaDeClientes, setclientesAgregados] = useState<IAgregadosDeClientes[]>([])

    useEffect(() => {
        axios.get('http://localhost:3004/clientes')
            .then((res) => {
                setclientesAgregados(res.data)
                console.log(res.data);

            })
    }, [])
    return (

        <Box className={` pt-4  w-screen  flex justify-center text-center`}>
            <div>
                {lsitaDeClientes?.map((itens) => (
                    <TabelaDTO lsitaDeClientes={itens} key={itens.documento} />
                ))}
            </div>
        </Box>
    )
}

export default ListaDeDados;