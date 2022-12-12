import { Box } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import TabelaDeAgregados from '../../components/Tabelas/TabelaDeAgregados';
import IAgregadosDeClientes from '../../utils/interfaces/AgregadosDeCliente';


const ListaDeDados = () => {
    const [listaDeClientes, setclientesAgregados] = useState<IAgregadosDeClientes[]>([])

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
                {listaDeClientes?.map((itens) => (
                    <TabelaDeAgregados listaDeClientes={itens} key={itens.documento} />
                ))}
            </div>
        </Box>
    )
}

export default ListaDeDados;