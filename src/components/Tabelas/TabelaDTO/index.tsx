import { iconEdit } from "../../../assets/icons/icons-jsx/icon";
import AgregadosDeClientes from "../../../core/AgregadosCliente/AgregadosDeCliente";

interface TabelaDTOProps {
  clienteAgregados: AgregadosDeClientes[];
  clienteSelecionado?: (cliente: AgregadosDeClientes) => void;
  clienteExcluido?: (cliente: AgregadosDeClientes) => void;
}
function TabelaDTO(props: TabelaDTOProps, dtoClientes: AgregadosDeClientes) {
  function renderizarDados() {
    return props.clienteAgregados?.map((dtoClientes, i) => {
      return (
        <table>
          <tr className={`table mb-0 border-2 text-xl bg-green-700 border-black`}>
            <td>
              {dtoClientes.nomeDoCliente} - {dtoClientes.telefoneDoCliente}
              <button
                className="flex justify-center  float-right"
                onClick={() => props.clienteSelecionado?.(dtoClientes)}
              >
                {iconEdit}
              </button>
            </td>
          </tr>
          <table className="table  table-bordered border-black">
            <thead className="">
              <tr>
                <td>Numero do Boleto</td>
                <td>Numero de Parcelas</td>
                <td>Vencimento</td>
                <td>Data de Retorno</td>
                <td>Valor do Boleto</td>
                <td>Valor Negociado</td>
                <td>Anotacao</td>
              </tr>
              <tr>
                <td>{dtoClientes.numeroDocumentoBoleto}</td>
                <td>{dtoClientes.parcelaBoleto}</td>
                <td>{dtoClientes.vencimentoDoBoleto}</td>
                <td>{dtoClientes.dataDeRetornoCobrnaca}</td>
                <td>{dtoClientes.saldoDevedorDoBoleto}</td>
                <td>{dtoClientes.valorNegociadoCobranca}</td>
                <td>{dtoClientes.anotacaoCobranca}</td>
              </tr>
            </thead>
          </table>
        </table>
      );
    });
  }

  return (
    <table>
      <thead>{renderizarDados()}</thead>
    </table>
  );
}

export default TabelaDTO;
