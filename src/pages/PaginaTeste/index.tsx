import { Box } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import IClientes from './IClientes';
import TabelaDataCliente from './index-data';

const BuscaClientes = () => {

    const [clientes, setClientes] = useState<IClientes[]>([])

    var idCliente = localStorage.getItem('idCliente');

    useEffect(() => {
        axios.get('gestao-de-cobranca/api/v1/cliente')
            .then((res) => {
                setClientes(res.data)
                console.log(res.data);
            })
    }, [])
    return (
        <Box className={` pt-4  w-screen  flex justify-center text-center`}>
            <div>
                {clientes?.map((iten) => (
                    <TabelaDataCliente clientes={iten} key={iten.cliente} />
                ))}
            </div>
        </Box>
    )
}

export default BuscaClientes