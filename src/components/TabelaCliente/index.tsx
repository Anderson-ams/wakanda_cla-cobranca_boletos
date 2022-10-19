import React from 'react';
import Boleto from '../../core/BoletoCore/Boleto';
import Cliente from '../../core/ClienteCore/Cliente';
import Cobranca from '../../core/CobrancaCore/Conbranca';

interface TabelaPropsCliente {
  clientes: Cliente[]
}


function TabelaCliente(props: TabelaPropsCliente ) {

  function renderizarCabecalho() {
    return (
      <>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
        </tr>
      </>

    )
  }
  function renderizarDados() {
    return props.clientes?.map((cliente, i ) => {
      return (
        <tr key={cliente.telefoneCliente}>
          <td>{cliente.nomeCliente} - {cliente.telefoneCliente}</td>
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