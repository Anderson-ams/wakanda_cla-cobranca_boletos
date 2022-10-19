import React from 'react';

import Cobranca from '../../core/CobrancaCore/Conbranca';

interface TabelaPropsCobranca {
    cobrancas: Cobranca[];
}

function TabelaCobranca(props: TabelaPropsCobranca) {
    function renderizarCabecalho() {
        return (
            <>
                <tr>
                    <th>Data de Retorno</th>
                    <th>Valor Negociado</th>
                    <th>Anotação</th>
                </tr>
            </>
        );
    }
    function renderizarDados() {
        return props.cobrancas?.map((cobranca, i) => {
            return (
                <tr>
                    {/* <td>{cobranca.dataDoRetorno}</td> */}
                    <td>{cobranca.valorNegociadoAPagar}</td>
                    <td>{cobranca.anotacaoCobranca}</td>
                </tr>
            )
        });
    }

    return (
        <table>
            <thead>{renderizarCabecalho()}</thead>
            <tbody>{renderizarDados()}</tbody>
        </table>
    )
}

export default TabelaCobranca;
