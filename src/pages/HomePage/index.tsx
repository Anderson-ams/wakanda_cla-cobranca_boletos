import "./index.scss";

import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import React, { useEffect, useState } from "react";
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

  /*Modal de import de CSV*/
  const [abrirModal_import, setAbrirModal_import] = useState(false);
  const manipuladorParaAbrirImport = () => setAbrirModal_import(true);
  const manipuladorParaFecharImport = () => setAbrirModal_import(false);
  /*Inport de CSV*/
  const [fileBase64, setFileBase64] = useState<string>("");
  const idCliente = localStorage.getItem("idCliente");
  function formSubmit(e: any) {
    e.preventDefault();
    console.log("AQUIVO CONVERTIDO", { fileBase64 });
    const data = {
      data: fileBase64.replace("text/csv,", ""),
    };
      axios.post(
        "gestao-de-cobranca/api/v1/cliente/" +idCliente +"/boleto/cadastro-boletos",data
      ).then((res) => {
        /* Coloque aqui Swal alert de confirmação de import */
      }).catch((ress) => {
        alert("ERROR");
      }) 
  }
  function convertFile(files: FileList | null) {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: string = fileRef.type || "";
      console.log("o arquivo do tipo ", fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        setFileBase64(`${fileType},${btoa(ev.target.result)}`);
        console.log("AQUI", fileBase64);
      };
    }
  }

  /*Modal de filtro Vendedor */
  const [abrirModal_FiltroVendedor, setabrirModal_FiltroVendedor] =
    useState(false);
  const handlerOpenModalFiltroVendedor = () =>
    setabrirModal_FiltroVendedor(true);
  const handlerCloseModalFiltroVendedor = () =>
    setabrirModal_FiltroVendedor(false);

  /*Modal de filtro Cliente */
  const [abrirModal_FiltroCliente, setabrirModal_FiltroCliente] =
    useState(false);
  const handlerOpenModalFiltroCliente = () => setabrirModal_FiltroCliente(true);
  const handlerCloseModalFiltroCliente = () =>
    setabrirModal_FiltroCliente(false);

  /*Modal de filtro Cliente */
  const [abrirModal_FiltroTitulos, setabrirModal_FiltroTitulos] =
    useState(false);
  const handlerOpenModalFiltroTitulos = () => setabrirModal_FiltroTitulos(true);
  const handlerCloseModalFiltroTitulos = () =>
    setabrirModal_FiltroTitulos(false);

  /*MODAL FILTRO DATA*/
  const [abrirModal_filtroData, setAbrirModal_filtroData] = useState(false);
  const manipuladorParaAbrirFiltroData = () => setAbrirModal_filtroData(true);
  const manipuladorParaFecharFiltroData = () => setAbrirModal_filtroData(false);

  /**NAVEGACAO DAS ROTAS */
  // const navigate = useNavigate();

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
            <form onSubmit={formSubmit}>
              <input
                type="file"
                accept=".csv"
                onChange={(e) => convertFile(e.target.files)}
                className="w-96 text-sm flex justify-center h-14 pt-3"
              />
              <div className="flex justify-center mt-36">
                <button type="submit" className="w-28">
                  Importar
                </button>
              </div>
            </form>
          </Box>
        </Modal>
        {/*Botão para o filtro de vendedor por nome*/}
        <button
          onClick={handlerOpenModalFiltroVendedor}
          className="botao_vendedor"
        >
          Vendedor
        </button>
        {/*Modal de filtro Vendedor*/}
        <Modal
          open={abrirModal_FiltroVendedor}
          onClose={handlerCloseModalFiltroVendedor}
        >
          <Box sx={estiloModal}>
            <input
              type="text"
              placeholder="Filtrar por vendedor"
              className="w-96  h-14 flex justify-center text-center"
            />
            <div className="flex justify-center mt-36">
              <button className="w-28">Filtrar</button>
            </div>
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
          <Botao onClick={handlerOpenModalFiltroCliente}>Cliente</Botao>
          <Modal
            open={abrirModal_FiltroCliente}
            onClose={handlerCloseModalFiltroCliente}
          >
            <Box sx={estiloModal}>
              <p className="text-3xl font-serif mb-8 -mt-6 text-center">
                Filtrar por Cliente
                <hr />
              </p>
              <input
                type="text"
                placeholder="Insira o nome do Cliente"
                className="w-96  h-14 flex justify-center text-center"
              />
              <div className="flex justify-center mt-28">
                <button className="w-28">Filtrar</button>
              </div>
            </Box>
          </Modal>
        </div>
        <div>
          <Botao onClick={handlerOpenModalFiltroTitulos}>Titulo</Botao>
          <Modal
            open={abrirModal_FiltroTitulos}
            onClose={handlerCloseModalFiltroTitulos}
          >
            <Box sx={estiloModal}>
              <p className="text-3xl font-serif mb-8 -mt-6 text-center">
                Filtrar por Titulos
                <hr />
              </p>
              <input
                type="text"
                placeholder="Insira o numero do Titulo"
                className="w-96  h-14 flex justify-center text-center"
              />
              <div className="flex justify-center mt-28">
                <button className="w-28">Filtrar</button>
              </div>
            </Box>
          </Modal>
        </div>
      </section>
      {/* <button onClick={test} >BotãoTeste</button> */}
    </>
  );
}

export default HomePage;
