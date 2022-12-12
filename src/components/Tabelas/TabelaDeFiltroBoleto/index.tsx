import axios from 'axios';
import { useEffect, useState } from 'react';
import IAgregadosDeClientes from '../../../utils/interfaces/AgregadosDeCliente';
import IBoletosRequest from '../../../utils/interfaces/IBoletosRequest';
import ICliente from '../../../utils/interfaces/ICliente';
import ICobranca from '../../../utils/interfaces/ICobranca';

interface TabelaProps {
  boletosProps: IBoletosRequest;
}
const TabelaDeFiltroBoletos = ({ boletosProps }: TabelaProps) => {
  const [cliente, setCliente] = useState<ICliente>()
  const [cobranca, setCobranca] = useState<IAgregadosDeClientes>()

  useEffect(() => {
  const idCliente = localStorage.getItem('idCliente')
  axios.get("gestao-de-cobranca/api/v1/cliente/" + idCliente)
  .then((res) => {
    setCliente(res.data)
  })
},[])

useEffect(() => {
  axios.get("http://localhost:3004/clientes")
  .then((res) => {
    setCobranca(res.data)
  })
},[])
return (
    <>
    <table>
      <tr className={`table mb-0 border-2 text-xl font-bold bg-green-700 border-black`}>
        <td>
          {cliente?.nomeCliente} - {cliente?.telefone}
          
          {/* <button
                  className="flex justify-center  float-right"
                  onClick={() => props.clienteSelecionado?.(lsitaDeClientes)}
                >
                  {iconEdit}
                </button> */}
        </td>
      </tr>
      <table className="table table-bordered border-black">
        <thead className="">
          <tr className='font-bold text-2xl'>
            <td>Numero do Boleto</td>
            <td>Numero de Parcelas</td>
            <td>Vencimento</td>
            <td>Data de Retorno</td>
            <td>Valor do Boleto</td>
            <td>Valor Negociado</td>
            <td className='w-96'>Anotacao</td>
          </tr>
          <tr className='text-2xl'>
            <td>{boletosProps.documento}</td>
            <td>{boletosProps.parcela}</td>
            <td>{boletosProps.dataVencimento}</td>
            <td>{cobranca?.dataDeRetorno}</td>
            <td>{boletosProps.saldoDevedor}</td>
            <td>{cobranca?.valorNegociado}</td>
            <td>{cobranca?.anotacao}</td>
          </tr>
        </thead>
      </table>
    </table>
    </>
  );
}
export default TabelaDeFiltroBoletos;
