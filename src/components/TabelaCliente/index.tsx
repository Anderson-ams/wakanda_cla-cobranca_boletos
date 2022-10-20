import React from 'react';
import Boleto from '../../core/BoletoCore/Boleto';
import Cliente from '../../core/ClienteCore/Cliente';
import Cobranca from '../../core/CobrancaCore/Conbranca';

interface TabelaPropsCliente {
  clientes: Cliente[]
  children?: any
  className?: React.HTMLAttributes<HTMLDivElement> | string | undefined | any
}


function TabelaCliente(props: TabelaPropsCliente ) {

  
  function renderizarDados() {
    return props.clientes?.map((cliente, i ) => {
      return (
        <tr className={`bg-zinc-400 `} key={cliente.telefoneCliente}>
          {cliente.nomeCliente} - {cliente.telefoneCliente}
        </tr>
      )
    })
  }

  return (
    <table>
      {renderizarDados()}
    </table>
  )
}

export default TabelaCliente;