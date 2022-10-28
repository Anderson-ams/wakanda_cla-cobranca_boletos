import LayoutTabela from "../../components/Tabelas/LayoutTabela";
import TabelaDTO from "../../components/Tabelas/TabelaDTO";
import AgregadosDeClientes from "../../core/AgregadosCliente/AgregadosDeCliente";
import Cliente from "../../core/ClienteCore/Cliente";
import Container from "@mui/material/Container";

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
    mr-5 border-solid border-2 border-black  bg-slate-50
    w-7/9 mt-24 
   `}
        >
          <div>
            <h2 className={`text-center text-2xl mt-1 font-bold`}>
              Lista De Vizualização de Clientes
            </h2>
          </div>

          <LayoutTabela>
            <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
            <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
            <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
            <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
            <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
            <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
          </LayoutTabela>
          {/* <div
          className={`flex-col w-11/12 flex m-auto border-black
          border-2  border-x-2 border-y-2`}
        > 
           <div className={`flex bg-zinc-400 border-black   justify-center   `}> 
            <TabelaCliente
              clientes={cliente}
              clienteSelecionado={clienteSelecionado}
            ></TabelaCliente>
           </div> 
           <div
            className={`pl-6 pr-6  flex border-black border-2 justify-center  box-border`}
          > 
            <TabelaBoleto boletos={boleto}></TabelaBoleto>
            <TabelaCobranca cobrancas={cobranca}></TabelaCobranca>
           </div>
        </div> */}
        </div>
      </Container>
    </>
  );
}

export default CadastrosLista;
