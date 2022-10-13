import axios from "axios";
import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Botao from "../../components/Botao";
import style from "./Cobranca.module.scss";

function Cobranca() {
  const [valorNegociado, setValorNegociado] = useState("");
  const [anotacao, setAnotacao] = useState("");
  const [dataDeRetorno, setDataDeRetorno] = useState("");

  const navigate = useNavigate();
  const idBoleto = localStorage.getItem("idBoleto");

  const salvarDadoInput = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const data = {
      valorNegociado: valorNegociado,
      anotacao: anotacao,
      dataDeRetorno: dataDeRetorno,
    };
    await axios
      .post("gestao-de-cobranca/api/v1/boleto/" + idBoleto + "/cobranca", data)
      .then(() => {
        swal("INFORMAÇÕES SALVAS!", "SUCESSO", "success");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch(() => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          title: <strong>ALGO DEU ERRADO</strong>,
          html: <i>verifique as informações preenchidas</i>,
          icon: "error",
        });
      });
    console.log("state", valorNegociado, anotacao, dataDeRetorno);
  };

  return (
    <>
      <section className={style.elementosLinha}>
        <div>
          <label htmlFor="codigo-cliente">NOME DO CLIENTE:</label>
          <input
            className={style.inputCodigoCliente}
            type="text"
            disabled
            name="codigo-cliente"
            required
            min="0"
          />
        </div>
        <div>
          <label htmlFor="inscricao-social">NÚMERO DE PARCELAS:</label>
          <input className={style.inputNumeroParcela} disabled type="text" />
        </div>
      </section>

      <section>
        <div className={style.inputNumeroBoleto}>
          <label htmlFor="codigo-cliente">NÚMERO DO BOLETO:</label>
          <input type="text" disabled name="codigo-cliente" required min="0" />
        </div>
        <div className={style.inputValorBoleto}>
          <label htmlFor="codigo-cliente">VALOR DO BOLETO:</label>
          <input type="text" disabled name="codigo-cliente" required min="0" />
        </div>
      </section>

      <form onSubmit={salvarDadoInput}>
        <div className={style.inputValorNegociado}>
          <label htmlFor="codigo-cliente">VALOR NEGOCIADO:</label>
          <CurrencyInput
            onChange={(e) => setValorNegociado(e.target.value)}
            defaultValue={0}
            decimalsLimit={1}
            className={style.iValorNegociado}
            name="codigo-cliente"
            required
            min="0"
          />
        </div>

        <div className={style.labelAnotacao}>
          <label htmlFor="#" typeof="text" id="anotacao">
            ANOTAÇÃO:
          </label>
        </div>

        <div className={style.campoTextarea}>
          <textarea
            value={anotacao}
            onChange={(e) => setAnotacao(e.target.value)}
            required
            name=""
            id="anotacao"
          ></textarea>
        </div>

        <div className={style.labelDataRetorno}>
          <label htmlFor="">DATA DE RETORNO:</label>
        </div>
        <div className={style.inputDataRetorno}>
          <input
            value={dataDeRetorno}
            onChange={(e) => setDataDeRetorno(e.target.value)}
            required
            type="date"
          />
        </div>

        <div className={style.botaoCliente}>
          <Botao>Salvar</Botao>
        </div>
      </form>
    </>
  );
}
export default Cobranca;
