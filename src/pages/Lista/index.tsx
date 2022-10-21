
import LayoutTabela from "../../components/Tabelas/LayoutTabela";
import TabelaBoleto from "../../components/Tabelas/TabelaBoleto";
import TabelaCliente from "../../components/Tabelas/TabelaCliente";
import TabelaCobranca from "../../components/Tabelas/TabelaCobranca";
import Boleto from "../../core/BoletoCore/Boleto";
import Cliente from "../../core/ClienteCore/Cliente";
import Cobranca from "../../core/CobrancaCore/Conbranca";

function CadastrosLista() {
  const cliente = [new Cliente("Loja e Comércio do Zé", 73981344354)];

  const boleto = [new Boleto("125457", "2", 450, "new Date()")];

  const cobranca = [
    new Cobranca(
      500,
      "new Date()",
      "A os visuais antes de utilizar conteúdo real. Essa anotação texto vai precisar ter um limite de caractéres"
    ),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nomeCliente);
  }

  return (
    <div
      className={`
    h-96 flex-col ml-5 mr-5 border-solid border-2 border-black  bg-slate-50
    w-7/9 mt-16 
   `}
    >
      <div className={``}>
        <h2 className={`text-center text-2xl font-bold pt-2`}>
          Lista De Vizualização de Clientes
        </h2>
      </div>

      <LayoutTabela>
        <div
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
            className={`border-solid pl-6 pr-6  flex border-black border-2 justify-center  box-border`}
          >
            <TabelaBoleto boletos={boleto}></TabelaBoleto>
            <TabelaCobranca cobrancas={cobranca}></TabelaCobranca>
          </div>
        </div>
      </LayoutTabela>
    </div>
  );
}

export default CadastrosLista;
