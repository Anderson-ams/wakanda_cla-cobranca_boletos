import "./index.scss";

import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import Botao from "../../components/Botao";
import LayoutTabela from "../../components/Tabelas/LayoutTabela";
import TabelaDTO from "../../components/Tabelas/TabelaDTO";
import TituloTabela from "../../components/TituloTabela";
import AgregadosDeClientes from "../../core/AgregadosCliente/AgregadosDeCliente";
import { IFiltroDeTabela } from "../../utils/interfaces/IFiltroTabela";
import { filtroDeTabela } from "../../utils/state/atom";
import { resolve } from "path";
import { rejects } from "assert";
import state from "sweetalert/typings/modules/state";

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
      "Zé",
      "123456789",
      "987654321",
      "2",
      100,
      "01/01/2022",
      70,
      "Lorem ipsum dolor sitLorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "01/01/2001"
    ),
  ];

  /*Modal de import de Titulos*/
  const [abrirModal_import, setAbrirModal_import] = useState(false);
  const manipuladorParaAbrirImport = () => setAbrirModal_import(true);
  const manipuladorParaFecharImport = () => setAbrirModal_import(false);
  /*funcs de import do csv*/

  const [file, setFile] = useState<File | any>();
  function getBase64(file: File) {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = undefined;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log("Arquivo CSV", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log("ARQUIVO CSV CONVERTIDO", fileInfo);
    });
  }
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.files?.[0] || null);
    let fileCSV = file;
    fileCSV = e.target.files?.[0] || null || File;
    getBase64(fileCSV)
      .then((result) => {
        file["base64"] = result;
        // console.log("@@@@", file, "@@@");
      })
      .catch((err) => {
        console.log(err);
      });
    // setFile({
    //   file: e.target.files?.[0] || null
    // });
  };
  /*Modal de filtro Vendedor */
  const [abrirModal_FiltroVendedor, setabrirModal_FiltroVendedor] = useState(false);
  const handlerOpenModalFiltroVendedor = () => setabrirModal_FiltroVendedor(true);
  const handlerCloseModalFiltroVendedor = () => setabrirModal_FiltroVendedor(false);



  /*MODAL FILTRO DATA*/
  const [abrirModal_filtroData, setAbrirModal_filtroData] = useState(false);
  const manipuladorParaAbrirFiltroData = () => setAbrirModal_filtroData(true);
  const manipuladorParaFecharFiltroData = () => setAbrirModal_filtroData(false);

  /**NAVEGACAO DAS ROTAS */
  const navigate = useNavigate();

  /**func do calendario (Continuar no curso da alura)*/
  const [data, setData] = useState("");
  const setFiltroDataTabela =
    useSetRecoilState<IFiltroDeTabela>(filtroDeTabela);
  const handleTeste = (evento: React.FormEvent<HTMLFormElement>) => {
    // evento.preventDefault()
    console.log(setData, data);
  };
  return (
    <>
      <section className="div_botao_importa-vendedor">
        {/*Botão de import CSV*/}
        <button onClick={manipuladorParaAbrirImport} className="botao_importa">
          Importar Titulos
        </button>
        {/*Modal de import CSV*/}
        <Modal open={abrirModal_import} onClose={manipuladorParaFecharImport}>
          <Box sx={estiloModal}>
            <form>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileInputChange}
                className="w-96 text-sm flex justify-center h-14 pt-3"
              />
              <div className="flex justify-center mt-36">
                <button className="w-28" onClick={() => console.log()}>
                  Importar
                </button>
              </div>
            </form>
          </Box>
        </Modal>

        {/*Botão para o filtro de vendedor por nome*/}
        <button onClick={handlerOpenModalFiltroVendedor} className="botao_vendedor">
          Vendedor
        </button>
        {/*Modal de filtro Vendedor*/}
        <Modal open={abrirModal_FiltroVendedor} onClose={handlerCloseModalFiltroVendedor}>
          <Box sx={estiloModal}>

          </Box>
        </Modal>
      </section>

      <Container maxWidth="xl">
        <Box className={`border-black -mb-14 border-solid border-2 mt-9`}>
          <section className={`flex-grow `}>
            <div className="divBotaoFiltro">
              <button
                onClick={manipuladorParaAbrirFiltroData}
                className="botao_filtro"
              >
                Filtrar data inicial/vencimento
              </button>

              {/*Modal do Filtro por Data*/}
              <Modal
                open={abrirModal_filtroData}
                onClose={manipuladorParaFecharFiltroData}
              >
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
            {/*Titulo (Relatório de títulos em atraso) */}
            <div className={`flex justify-center -mt-11 bg-slate-300`}>
              <TituloTabela />
            </div>
            {/* Caixa de pre-vizualização das tabelas/dados */}
            <section className={` overflow-auto h-80 border-solid border-1`}>
              <LayoutTabela>
                <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
                <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
                <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
                <TabelaDTO clienteAgregados={clienteDTO}></TabelaDTO>
              </LayoutTabela>
            </section>
          </section>
        </Box>
      </Container>
      <section className="botoes_Cliente-Titulo">
        <div>
          <Botao onClick={() => { }}>Novo Cliente</Botao>
        </div>
        <div>
          <Botao>Titulo</Botao>
        </div>
      </section>
    </>
  );
}

export default HomePage;
