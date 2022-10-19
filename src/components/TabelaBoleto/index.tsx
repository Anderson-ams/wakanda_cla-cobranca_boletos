import React from 'react';
import Boleto from '../../core/BoletoCore/Boleto';
import Cliente from '../../core/ClienteCore/Cliente';
import Cobranca from '../../core/CobrancaCore/Conbranca';

interface TabelaPropsBoleto {
  boleto: Boleto[]

}
function TabelaBoleto(props: TabelaPropsBoleto) {

  function renderizarCabecalho() {
    return (
      <>
        <tr>
          <th>Número do Boleto</th>
          <th>Número da Parcela</th>
          <th>Valor do Boleto</th>
          <th>Vencimento</th>
        </tr>
      </>
    );
  }
  // function renderizarDados() {
  //   props.boleto.map
  // }

  return (
    <table>
      {renderizarCabecalho()}
    </table>
  )
}

export default TabelaBoleto;