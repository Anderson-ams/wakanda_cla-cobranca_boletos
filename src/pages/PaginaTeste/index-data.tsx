
import IClientes from './IClientes';

interface TabelaClientesProps {
  clientes: IClientes;
}
const TabelaDataCliente = ({ clientes }: TabelaClientesProps) => {

  return (
    <>
    <table>
      <tr className={`table mb-0 border-2 text-xl font-bold bg-green-700 border-black`}>
        <td>
          {clientes.cliente} - {clientes.nomeCliente}
          {/* <button
                  className="flex justify-center  float-right"
                  onClick={() => props.clienteSelecionado?.(clientes
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
          </tr>
          <tr>
            <td>{clientes.dataDoCadastro}</td>
            <td>{clientes.inscricaoSocial}</td>
            <td>{clientes.email}</td>
            <td>{clientes.nomeVendedor}</td>
            <td>{clientes.telefone}</td>
          </tr>
        </thead>
      </table>
    </table>
    </>
  );
}
export default TabelaDataCliente;
