import "./index.scss";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

import Botao from "../../components/Botao";
import LayoutTabela from "../../components/Tabelas/LayoutTabela";
import TabelaDTO from "../../components/Tabelas/TabelaDTO";
import TituloTabela from "../../components/TituloTabela";
import AgregadosDeClientes from "../../core/AgregadosCliente/AgregadosDeCliente";

/*
    AL: COMPONENTE TABELA #2
*/

function HomePage() {
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

  const navigate = useNavigate();

  return (
    <>
      <Container maxWidth="xl">
        <Box className={`border-black -mb-10 border-solid border-2 mt-16`}>
          <section className={`flex-grow`}>

            <div className="divBotaoFiltro">
              <button className="botao_filtro">
                filtrar data inicial/vencimento
              </button>
            </div>

            <div className={`flex justify-center -mt-9`}>
              <TituloTabela />
            </div>

            <section className={` overflow-auto h-80 border-solid border-1`}>
              <LayoutTabela>
                <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
                <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
                <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
              </LayoutTabela>
            </section>
          </section>
        </Box>
      </Container>

      <div className="flex justify-center">
          <Botao onClick={() => navigate('/cliente')}>Novo Cliente</Botao>
      </div>
    </>
  );
}
export default HomePage;
