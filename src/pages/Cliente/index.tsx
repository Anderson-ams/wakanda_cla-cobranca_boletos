import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Botao from "../../components/Botao";
import style from "./Cliente.module.scss";

const Cliente = () => {
  const [cliente, setCodigoCliente] = useState("");
  const [nomeCliente, setNomeCliente] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [nomeVendedor, setNomeVendedor] = useState("");
  const [dataDoCadastro, setDataCadastro] = useState("");
  const opcoes = [{ texto: "" }, { texto: "CPF" }, { texto: "CNPJ" }];
  const [inscricaoSocial, setinscricaoSocial] = useState(opcoes[0].texto);

  const navigate = useNavigate();

  const salvarDadoInput = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const data = {
      cliente: cliente,
      nomeCliente: nomeCliente,
      inscricaoSocial: inscricaoSocial,
      telefone: telefone,
      email: email,
      nomeVendedor: nomeVendedor,
      dataDoCadastro: dataDoCadastro,
    };
    await axios
      .post("gestao-de-cobranca/api/v1/cliente", data)
      .then((response) => {
        localStorage.setItem("idCliente", response.data.idCliente);
        swal("CLIENTE SALVO!", "sucesso", "success");
        setTimeout(() => {
          navigate("/boleto");
        }, 2000);
        setCodigoCliente("");
        setinscricaoSocial("");
        setNomeCliente("");
        setTelefone("");
        setEmail("");
        setNomeVendedor("");
        setDataCadastro("");
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
      cliente,
      inscricaoSocial,
      nomeCliente,
      telefone,
      email,
      nomeVendedor,
      dataDoCadastro
    );
  };

  return (
    <form onSubmit={salvarDadoInput}>
      <section className={style.elementosLinha}>
        <div>
          <label htmlFor="codigo-cliente">CÓDIGO CLIENTE:</label>
          <input
            className={style.inputCodigoCliente}
            value={cliente}
            onChange={(e) => setCodigoCliente(e.target.value)}
            type="text"
            name="codigo-cliente"
            required
            min="0"
          />
        </div>
        <div>
          <label htmlFor="inscricao-social">INSCRIÇÃO SOCIAL:</label>
          <select
            className={style.selectIncriSocial}
            onChange={(e) => setinscricaoSocial(e.target.value)}
            name="inscricao-social"
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
        <div className={style.camponomeCliente}>
          <label htmlFor="razao-social">RAZÃO SOCIAL:</label>
          <input
            value={nomeCliente}
            onChange={(e) => setNomeCliente(e.target.value)}
            type="text"
            name="razao-social"
            required
            min="0"
          />
        </div>

        <div className={style.campoTelefone}>
          <label htmlFor="telefone">TELEFONE:</label>
          <input
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            type="tel"
            name="telefone"
            required
            min="0"
          />
        </div>

        <div className={style.campoEmail}>
          <label htmlFor="email">EMAIL:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            required
            min="0"
          />
        </div>

        <div className={style.campoNomeVendedor}>
          <label htmlFor="vendedor">VENDEDOR:</label>
          <input
            value={nomeVendedor}
            onChange={(e) => setNomeVendedor(e.target.value)}
            type="text"
            name="vendedor"
            required
            min="0"
          />
        </div>

        <div className={style.campoDataCadastro}>
          <label htmlFor="data-cadastro">DATA DE CADASTRO:</label>
          <input
            value={dataDoCadastro}
            onChange={(e) => setDataCadastro(e.target.value)}
            type="date"
            name="data-cadastro"
            required
            min="0"
          />
        </div>
      </section>
      <section className={style.botaoSalvar}>
        <div>
          <Botao onClick={() => navigate("/")}>CANCELAR</Botao>
        </div>
        <div>
          <Botao>SALVAR</Botao>
        </div>
      </section>
    </form>
  );
};

export default Cliente;
