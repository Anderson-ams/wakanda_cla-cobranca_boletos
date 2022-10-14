import React from "react";
import { Table } from "react-bootstrap";

// import { Container } from './styles';

const Cadastros: React.FC = () => {
  return (
    <>
      <table>
        <th>
          <tr>
            <td>Nome do Cliente</td>
            <td>Tel:123456789</td>
          </tr>
        </th>
        <tbody>
          <tr>
            <td>número do boleto</td>
            <td>número da parcela</td>
            <td>vencimento</td>
            <td>data de retorno</td>
            <td>valor do boleto</td>
            <td>valor do boleto</td>
            <td>Anotação</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Cadastros;
