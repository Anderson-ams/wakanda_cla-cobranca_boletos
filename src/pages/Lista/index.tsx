import React from "react";

import LayoutTabela from "../../components/LayoutTabela";
import TabelaBoleto from "../../components/TabelaBoleto";
import TabelaCliente from "../../components/TabelaCliente";
import TabelaCobranca from "../../components/TabelaCobranca";
import Boleto from "../../core/BoletoCore/Boleto";
import Cliente from "../../core/ClienteCore/Cliente";
import Cobranca from "../../core/CobrancaCore/Conbranca";


function CadastrosLista() {
  const cliente = [new Cliente("Loja e Comércio do Zé", 73981344354)];

  const boleto = [new Boleto("125457", "2", new Date(), 450)];

  const cobranca = [new Cobranca(500, new Date(), "A os visuais antes de utilizar conteúdo real.")];

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

        <div className={`flex-col w-11/12 border-black
         border-2 justify-center border-x-2 border-y-2`}>
          <div className={`flex bg-zinc-400 border-black  justify-center   `}>
            <TabelaCliente clientes={cliente}></TabelaCliente>
          </div>
          <div className={`border-solid pl-6 pr-6  flex border-black border-2 justify-center  box-border`}>
            <TabelaBoleto boletos={boleto}></TabelaBoleto>
            <TabelaCobranca cobrancas={cobranca}></TabelaCobranca>
          </div>
        </div>
      </LayoutTabela>

    </div>
  );
}

export default CadastrosLista;
