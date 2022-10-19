import React from "react";
import LayoutTabela from "../../components/LayoutTabela";
import TabelaBoleto from '../../components/TabelaBoleto';
import TabelaCliente from "../../components/TabelaCliente";
import TabelaCobranca from '../../components/TabelaCobranca';
import Boleto from "../../core/BoletoCore/Boleto";
import Cliente from "../../core/ClienteCore/Cliente";
import Cobranca from "../../core/CobrancaCore/Conbranca";

function CadastrosLista() {
  const cliente = [new Cliente("Anderson", 73245787)];

  const boleto = [new Boleto("125457", "2", new Date(), 450)];

  const cobranca = [new Cobranca(500, new Date(), "cliente")];

  return (
    <div
      className={`
    h-96 flex-col  ml-5 mr-5 border-solid border-2 border-black bg-slate-50
    w-7/9 mt-16 
   `}
    >
      <div className={``}>
        <h2 className={`text-center text-2xl font-bold pt-2`}>
          Lista De Vizualização de Clientes
        </h2>
      </div>
      <LayoutTabela>
        <TabelaCliente clientes={cliente}></TabelaCliente>
        <TabelaBoleto boleto={boleto}></TabelaBoleto>
        <TabelaCobranca cobranca={cobranca}></TabelaCobranca>
      </LayoutTabela>
    </div>
  );
}

export default CadastrosLista;
