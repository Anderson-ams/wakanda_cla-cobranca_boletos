import axios from "axios";
import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Botao from "../../components/Botao";
import style from "./Boleto.module.scss";

const Boleto = () => {
  const [documento, setDocumento] = useState("");
  const opcoes = [{ texto: "" }, { texto: "1X" }, { texto: "2X" }];
  const [parcela, setParcela] = useState(opcoes[0].texto);
  const [dataVencimento, setDataVencimento] = useState("");
  const [saldoDevedor, setSaldoDevedor] = useState("");
  const selecione = [
    { texto: "" },
    { texto: "CESCONETTO" },
    { texto: "OVOS_NATURAVES" },
    { texto: "AGROAVICULA" },
    { texto: "CRESCE_FORTE" },
  ];
  const [grupoEmpresarial, setGrupoEmpresarial] = useState(selecione[0].texto);

  const idCliente = localStorage.getItem("idCliente");
  const navigate = useNavigate();

  const salvarDadoInput = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const data = {
      documento: documento,
      parcela: parcela,
      dataVencimento: dataVencimento,
      saldoDevedor: saldoDevedor,
      grupoEmpresarial: grupoEmpresarial,
    };

    axios
      .post("gestao-de-cobranca/api/v1/cliente/" + idCliente + "/boleto", data)
      .then((response) => {
        localStorage.setItem("idBoleto", response.data.idBoleto);
        swal("BOLETO SALVO!", "sucesso", "success");
        setTimeout(() => {
          navigate("/cobranca");
        }, 2000);
        setDocumento("");
        setParcela("");
        setDataVencimento("");
        setSaldoDevedor("");
        setGrupoEmpresarial("");
      })
      .catch(() => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          title: <strong>ALGO DEU ERRADO</strong>,
          html: <i>verifique as informações preenchidas!</i>,
          icon: "error",
        });
      });
    console.log(
      "state:",
      documento,
      parcela,
      dataVencimento,
      saldoDevedor,
      grupoEmpresarial
    );
  };

  //função para validar se campos estão preenchidos!
  // const onNext = () => {
  //     if (
  //         numeroBoleto &&
  //         nemeroParcela &&
  //         dataVencimento &&
  //         valorBoleto &&
  //         grupoEmpresarial
  //         !== "") {
  //         console.log("onNext")
  //         navigate('/cobranca')
  //     } else {
  //         Swal.fire({
  //             icon: 'error',
  //             title: 'Oops...',
  //             text: 'É NECESSÁRIO PREENCHER TODOS OS CAMPOS PARA CONTINUAR',
  //         })
  //     }
  // }
  return (
    <form onSubmit={salvarDadoInput}>
      <section className={style.elementosLinha}>
        <div>
          <label htmlFor="numero-boleto">NÚMERO DO BOLETO:</label>
          <input
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            type="number"
            name="numero-boleto"
            required
            min="0"
          />
        </div>
        <div>
          <label className={style.labelNumeroParcela} htmlFor="numero-parcela">
            NÚMERO DA PARCELA:
          </label>
          <select
            className={style.selectNumeroParcela}
            onChange={(e) => setParcela(e.target.value)}
            name="numero-parcela"
            required
          >
            {opcoes.map((opcao) => (
              <option key={opcao.texto} value={opcao.texto}>
                {opcao.texto}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className={style.elementosColuna}>
        <div className={style.inputDataVencimento}>
          <label htmlFor="data-venciamento-boleto">DATA DO VENCIMENTO:</label>
          <input
            value={dataVencimento}
            onChange={(e) => setDataVencimento(e.target.value)}
            type="date"
            name="data-venciamento-boleto"
            required
            min="0"
          />
        </div>

        <div className={style.inputValorBoleto}>
          <label className={style.campoValorBoleto} htmlFor="valor-boleto">
            VALOR DO BOLETO:
          </label>
          <CurrencyInput
            onChange={(e) => setSaldoDevedor(e.target.value)}
            id="input-example"
            name="input-name"
            placeholder="valor"
            defaultValue={0}
            decimalsLimit={1}
          />
        </div>

        <div className={style.inputGrupoEmpresarial}>
          <label htmlFor="grupo-empresarial">GRUPO EMPRESARIAL:</label>
          <select
            onChange={(e) => setGrupoEmpresarial(e.target.value)}
            name="pets"
            id="pet-select"
            required
          >
            {selecione.map((opcao) => (
              <option key={opcao.texto} value={opcao.texto}>
                {opcao.texto}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section>
        <div className={style.botaoBoleto}>
          <Botao>SALVAR</Botao>
        </div>
        {/* <div className={style.botaoAvanca}>
                        <button
                            type='button'
                            onClick={onNext}
                        >
                            <GrLinkNext size={30} />
                        </button>
                    </div>
                    <div className={style.botaoRetornar}>
                        <button
                            type='button'
                            onClick={() => navigate('/cliente')}>
                            <GrLinkPrevious size={30} />
                        </button>
                    </div> */}
      </section>
    </form>
  );
};
export default Boleto;
