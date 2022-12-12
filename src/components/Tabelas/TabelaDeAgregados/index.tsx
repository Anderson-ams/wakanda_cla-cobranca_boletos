import { Checkbox } from '@mui/material';
import { HtmlHTMLAttributes, useEffect, useState } from 'react';
import IAgregadosDeClientes from "../../../utils/interfaces/AgregadosDeCliente";
import './index.css'
interface TabelaProps {
  listaDeClientes: IAgregadosDeClientes;
}
const TabelaDeAgregados = ({ listaDeClientes }: TabelaProps) => {

  const [evento, setEvento] = useState(true)
  const [checked, setChecked] = useState(false)

  const onChangeHandler = () => {
    setChecked(!checked);
    setEvento(false);
    console.log("Clique", evento, " - ", checked);
    
  };
  // const [inputCheck, setInputCheck] = useState(true)

 useEffect(() => {
    localStorage.setItem("EstadoOffCheckouOnCheckd", JSON.stringify(evento).replace(/"/g, ""))
  }, [evento])

  useEffect(() => {
    const dado = localStorage.getItem("EstadoOffCheckouOnCheckd")
    if (dado !== null) setEvento(JSON.parse(dado))
  }, [evento])

  return (
    <>
      <table>
        <tr >
          <td className="tableRowLine">
            {listaDeClientes.nomeCliente} - {listaDeClientes.telefone}
            <div className='containerCheck'>
              <input className='inputCheck'
              type='checkbox'
                disabled={checked}
                // checked={}
                value="evento"
                onChange={onChangeHandler}
              />
              <span className='novaCheckbox' />
            </div>
          </td>
        </tr>
        <table className="table table-bordered border-black">
          <thead className="">
            <tr className='font-bold'>
              <td>Numero do Boleto</td>
              <td>Numero de Parcelas</td>
              <td>Vencimento</td>
              <td>Data de Retorno</td>
              <td>Valor do Boleto</td>
              <td>Valor Negociado</td>
              <td className='w-96'>Anotacao</td>
            </tr>
            <tr>
              <td>{listaDeClientes.documento}</td>
              <td>{listaDeClientes.parcela}</td>
              <td>{JSON.stringify(listaDeClientes.dataVencimento).replace(/"/g, "")}</td>
              <td>{listaDeClientes.dataDeRetorno}</td>
              <td>{listaDeClientes.saldoDevedor}</td>
              <td>{listaDeClientes.valorNegociado}</td>
              <td>{listaDeClientes.anotacao}</td>
            </tr>
          </thead>
        </table>
      </table>
    </>
  );
}
export default TabelaDeAgregados;
