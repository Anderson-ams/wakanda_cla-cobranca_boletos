import { iconEdit } from "../../../assets/icons/icons-jsx/icon";
import IAgregadosDeClientes from "../../../core/AgregadosCliente/AgregadosDeCliente";

interface TabelaDTOProps {
  lsitaDeClientes: IAgregadosDeClientes;
}
const TabelaDTO = ({ lsitaDeClientes}: TabelaDTOProps) => {

  return (
    <>
    <table>
      <tr className={`table mb-0 border-2 text-xl font-bold bg-green-700 border-black`}>
        <td>
          {lsitaDeClientes.nomeCliente} - {lsitaDeClientes.telefone}
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
            <td>{lsitaDeClientes.documento}</td>
            <td>{lsitaDeClientes.parcela}</td>
            <td>{lsitaDeClientes.dataVencimento}</td>
            <td>{lsitaDeClientes.dataDeRetorno}</td>
            <td>{lsitaDeClientes.saldoDevedor}</td>
            <td>{lsitaDeClientes.valorNegociado}</td>
            <td>{lsitaDeClientes.anotacao}</td>
          </tr>
        </thead>
      </table>
    </table>
    </>
  );
}
export default TabelaDTO;
