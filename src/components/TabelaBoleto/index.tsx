import React from 'react';

import Boleto from '../../core/BoletoCore/Boleto';

interface TabelaPropsBoleto {
  boletos: Boleto[];
}
function TabelaBoleto(props: TabelaPropsBoleto) {
  function renderizarCabecalho() {
    return (
      <>
      <table>
        <tr >
          <th>Número do Boleto</th>
          <th>Número da Parcela</th>
          <th>Valor do Boleto</th>
          <th>Vencimento</th>
        </tr>
      </table>
      </>
    );
  }
  function renderizarDados() {
    return props.boletos?.map((boleto, i) => {
      return (
        <tr >
          <td>{boleto.numeroDoBoleto}</td>
          <td>{boleto.numeroParcela}</td>
          <td>{boleto.valorBoleto}</td>
          {/* <td>{new Date(boleto)}</td> */}
        </tr>

      );
    });
  }

  return (
    <table>
      <thead>{renderizarCabecalho()}</thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}

export default TabelaBoleto;
