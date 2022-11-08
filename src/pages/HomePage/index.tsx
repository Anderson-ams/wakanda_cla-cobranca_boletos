import "./index.scss";

import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import Botao from "../../components/Botao";
import LayoutTabela from "../../components/Tabelas/LayoutTabela";
import TabelaDTO from "../../components/Tabelas/TabelaDTO";
import TituloTabela from "../../components/TituloTabela";
import AgregadosDeClientes from "../../core/AgregadosCliente/AgregadosDeCliente";
import { IFiltroDeTabela } from "../../utils/interfaces/IFiltroTabela";
import { filtroDeTabela } from "../../utils/state/atom";

/*
    AL: COMPONENTE TABELA #2
*/

const estiloModal = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  /**funcao da navecação do botão Cliente */
  const navigate = useNavigate();

  /**func do calendario */
  const [data, setData] = useState("");
  const setFiltroDataTabela =
    useSetRecoilState<IFiltroDeTabela>(filtroDeTabela);
  const handleTeste = (evento: React.FormEvent<HTMLFormElement>) => {
    // evento.preventDefault()
    console.log(setData, data);
  };
  return (
    <>
      <div className="div_botao_importa-vendedor">
        <button className="botao_importa">Importar Titulos</button>
        <button className="botao_vendedor">Vendedor</button>
      </div>
      <Container maxWidth="xl">
        <Box className={`border-black -mb-12 border-solid border-2 mt-9`}>
          <section className={`flex-grow`}>
            <div className="divBotaoFiltro">
              <button onClick={handleOpen} className="botao_filtro">
                filtrar data inicial/vencimento
              </button>

              {/*Modal do Filtro */}
              <Modal open={open} onClose={handleClose}>
                <Box sx={estiloModal}>
                  <form className={` flex-wrap `} onSubmit={handleTeste}>
                    <p className="text-3xl font-serif mb-8 -mt-6 text-center">
                      Coleque a data desejada
                      <hr />
                    </p>
                    <div className="flex justify-center">
                      <input
                        className={` flex justify-center w-80 h-10`}
                        name="data"
                        type="date"
                        onChange={(evento) => setData(evento.target.value)}
                        placeholder="Por data"
                        value={data}
                      />
                    </div>
                    <div className="flex justify-center mt-20 ">
                      <button className={`w-28`}>Filtrar</button>
                    </div>
                  </form>
                </Box>
              </Modal>
            </div>

            <div className={`flex justify-center -mt-9`}>
              <TituloTabela />
            </div>
            {/* Caixa de pre-vizualização da tabela */}
            <section className={` overflow-auto h-80 border-solid border-1`}>
              <LayoutTabela>
                <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
              </LayoutTabela>
            </section>
          </section>
        </Box>
      </Container>

      <div className="flex justify-center">
        <Botao onClick={() => navigate("/cliente")}>Novo Cliente</Botao>
      </div>
    </>
  );
}
export default HomePage;
