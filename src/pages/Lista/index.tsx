import Container from "@mui/material/Container";
import LayoutTabela from "../../components/Tabelas/LayoutTabela";
import TabelaDTO from "../../components/Tabelas/TabelaDTO";
import TituloTabela from "../../components/TituloTabela";
import AgregadosDeClientes from "../../core/AgregadosCliente/AgregadosDeCliente";
import Cliente from "../../core/ClienteCore/Cliente";
import "./index.css";
/*
    AL: COMPONENTE TABELA #2
*/

function CadastrosLista() {
  const clienteDTO = [
    new AgregadosDeClientes(
      "Cliente Zé",
      "7398245577",
      "BLA",
      "BLA",
      500,
      "",
      200,
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur reiciendis quibusdam eum et enim reprehenderit ab iste id voluptates, quidem recusandae,Lorem ipsum dolor, sit amet nemo corrupti k",
      0
    ),
  ];
  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nomeCliente);
  }

  return (
    <>
      <Container maxWidth="xl">
        <div
          className={`
    h-96 flex-col ml-5 >
    mr-5 border-solid border-2 border-black  bg-gray-200
    w-7/9 mt-24 
   `}
        >
          <TituloTabela>
            Lista De Vizualização de Clientes
          </TituloTabela>
          <button className="botao">Filtrar Data Icial/Vencimento</button>

          <LayoutTabela>
            <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
            <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
            <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
            <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
            <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
            <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
          </LayoutTabela>
        </div>
      </Container>
    </>
  );
}

export default CadastrosLista;
