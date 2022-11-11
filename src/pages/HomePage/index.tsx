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
import { resolve } from 'path';
import { rejects } from 'assert';

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
      "Lorem ipsum dolor, si, sit amet nemo corrupti k",
      0
    ),
  ];
  /*config. modal import*/
  const [abrirModal_import, setAbrirModal_import] = useState(false);
  const manipuladorParaAbrirImport = () => setAbrirModal_import(true);
  const manipuladorParaFecharImport = () => setAbrirModal_import(false);
  /*funcs de import do csv*/
  const [arquivo, setArquivo] = useState<File | null>();
  const fileReader = new FileReader();

  const capturarArquivos = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArquivo(e.target.files?.[0] || null);
  };

  const submeterArquivo = (e: React.FormEvent) => {
    e.preventDefault();
    if (arquivo) {
      fileReader.onload = function (e) {
        const saidaCSV = e.target?.result;
        let  falie = saidaCSV
      };
      fileReader.readAsText(arquivo);
    }
    const f = fileToBase64(arquivo)
    console.log(f);
    
  };

  const fileToBase64 = (file: File | Blob | any): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
     resolve(reader.result as string);
    };

    reader.readAsDataURL(file);
    reader.onerror = reject;
  });


  /*config. modal filtro data */
  const [abrirModal_filtro, setAbrirModal_filtro] = useState(false);
  const manipuladorParaAbrirFiltro = () => setAbrirModal_filtro(true);
  const manipuladorParaFecharFiltro = () => setAbrirModal_filtro(false);

  /**cont de navecação de rotas */
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
      {/*Botoes de import e vendedor */}
      <section className="div_botao_importa-vendedor">
        <button onClick={manipuladorParaAbrirImport} className="botao_importa">
          Importar Titulos
        </button>
        {/*Modal de import de Titulos*/}
        <Modal open={abrirModal_import} onClose={manipuladorParaFecharImport}>
          <Box sx={estiloModal}>
            <input
              type="file"
              accept=".csv"
              onChange={capturarArquivos}
              className="w-96 text-sm flex justify-center h-14 pt-3"
            />
            {/* <div> <CircularProgress/> </div> */}
            <div className='flex justify-center mt-36'>
              <button className='w-28'
                onClick={(evento) => {
                  submeterArquivo(evento);
                }}
              >
                Importar
              </button>
            </div>
          </Box>
        </Modal>

        <button onClick={() => navigate("/cliente")} className="botao_vendedor">
          Vendedor
        </button>
      </section>

      <Container maxWidth="xl">
        <Box className={`border-black -mb-14 border-solid border-2 mt-9`}>
          <section className={`flex-grow `}>
            <div className="divBotaoFiltro">
              <button
                onClick={manipuladorParaAbrirFiltro}
                className="botao_filtro"
              >
                Filtrar data inicial/vencimento
              </button>

              {/*Modal do Filtro por Data*/}
              <Modal
                open={abrirModal_filtro}
                onClose={manipuladorParaFecharFiltro}
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
              </LayoutTabela>
            </section>
          </section>
        </Box>
      </Container>
      <section className="botoes_Cliente-Titulo">
        <div>
          <Botao onClick={() => navigate("/cliente")}>Novo Cliente</Botao>
        </div>
        <div>
          <Botao onClick={() => navigate("/boleto")}>Titulo</Botao>
        </div>
      </section>
    </>
  );
}
export default HomePage;
