import { Box } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TabelaDeFiltroBoletos from '../../components/Tabelas/TabelaDeFiltroBoleto';
import IBoletosRequest from '../../utils/interfaces/IBoletosRequest';


const BoletosFiltrados = () => {
    const [filtroBoletos, setFiltroBoletos] = useState<IBoletosRequest[]>([])

    useEffect(() => {
        const idCliente = localStorage.getItem("idCliente");
        axios.get("gestao-de-cobranca/api/v1/cliente/" + idCliente + "/boleto/boletosVencidos")
            .then((res) => {
                setFiltroBoletos(res.data)
                console.log(res.data);
            })
    }, [])

    return (

        <Box className={` pt-4  w-screen  flex justify-center text-center`}>
            <div>
                {filtroBoletos?.map((itens) => (
                    <TabelaDeFiltroBoletos boletosProps={itens} key={itens.documento} />
                ))}
            </div>
        </Box>
    )
}

export default BoletosFiltrados;