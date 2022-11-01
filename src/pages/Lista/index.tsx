import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FiltraDados from "../../components/FiltroDeDados";
import LayoutTabela from "../../components/Tabelas/LayoutTabela";
import TabelaDTO from "../../components/Tabelas/TabelaDTO";
import TituloTabela from "../../components/TituloTabela";
import AgregadosDeClientes from "../../core/AgregadosCliente/AgregadosDeCliente";
import Cliente from "../../core/ClienteCore/Cliente";
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
        <Box className={`border-black border-solid border-2 mt-16 h-5/6`}>
          <div className={`flex justify-center`}>
            <TituloTabela />
          </div>
          <div>
            
          </div>
          <section className={`mt-1 overflow-auto h-96 border-solid border-1`}>
            <LayoutTabela>
              <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
              <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
            </LayoutTabela>
          </section>
        </Box>
      </Container>
    </>
  );
}

export default CadastrosLista;

/*
 *  <button>Botão</button>
      <Container maxWidth="xl">
        <div className={` absolute ml-96 mr-96  flex justify-center `}><TituloTabela /></div>
        <div
          className={`h-96 flex-col ml-5 mr-5 border-solid 
          border-2  border-black  overflow-auto bg-gray-200 w-7/9 mt-9`}
        >

          <LayoutTabela>
            <div className=''>
              <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
              <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
              <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
            </div>
          </LayoutTabela>
        </div>
      </Container>
 * 
 */
