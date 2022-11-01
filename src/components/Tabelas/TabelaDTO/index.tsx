import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Container from "@mui/material/Container";
import AgregadosDeClientes from "../../../core/AgregadosCliente/AgregadosDeCliente";

interface TabelaDTOProps {
  clienteAgregados: AgregadosDeClientes[];
}
function TabelaDTO(props: TabelaDTOProps) {
  // function renderizarCabecalho() {
  //     return props.clienteAgregados?.map((clientesDTO, i) => {
  //         return (

  //         );
  //     })
  // }

  function rendererizarDados() {
    return props.clienteAgregados?.map((dtoClientes, i) => {
      return (
        //    <TableContainer className='table-responsive' sx={{ maxHeight: 125,  width: 1250, }}>
        <>
          <table>
            <tr className={`table mb-0 border-2 bg-slate-400 border-black`}>
              <td>
                {dtoClientes.nomeDoCliente} - {dtoClientes.telefoneDoCliente}
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
              </thead>
              <tbody>
                <tr>
                  <td>{dtoClientes.numeroDocumentoBoleto}</td>
                  <td>{dtoClientes.parcelaBoleto}</td>
                  <td>{dtoClientes.vencimentoDoBoleto}</td>
                  <td>{dtoClientes.dataDeRetornoCobrnaca}</td>
                  <td>{dtoClientes.saldoDevedorDoBoleto}</td>
                  <td>{dtoClientes.valorNegociadoCobranca}</td>
                  <td>{dtoClientes.anotacaoCobranca}</td>
                </tr>
              </tbody>
            </table>
          </table>
        </>
        //    </TableContainer>
      );
    });
  }

  return (
    <table>
      <thead></thead>
      <tbody>{rendererizarDados()}</tbody>
    </table>
  );
}

export default TabelaDTO;