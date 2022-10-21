import Boleto from "../../../core/BoletoCore/Boleto";

interface TabelaPropsBoleto {
  boletos: Boleto[];
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
  function renderizarDados() {
    return props.boletos?.map((boleto, i) => {
      return (
        <tr>
          <td>{boleto.numeroDoBoleto}</td>
          <td>{boleto.numeroParcela}</td>
          <td>{boleto.valorBoleto}</td>
          <td>{boleto.dataVencimento}</td>
        </tr>
      );
    });
  }

  return (
    <table className={`w-full`}>
      <thead className={`border-b-2`}>{renderizarCabecalho()}</thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}

export default TabelaBoleto;
