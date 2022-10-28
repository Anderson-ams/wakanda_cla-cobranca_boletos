import React from 'react';

import Cobranca from '../../../core/CobrancaCore/Conbranca';

interface TabelaPropsCobranca {
    cobrancas: Cobranca[];
}

function TabelaCobranca(props: TabelaPropsCobranca) {
    function renderizarCabecalho() {
        return (
            <>
                <tr>
                    <th>Valor Negociado</th>
                    <th>Data de Retorno</th>
                    <th>Anotação</th>
                </tr>
            </>
        );
    }
    function renderizarDados() {
        return props.cobrancas?.map((cobranca, i) => {
            return (
                <tr>
                    <td>{cobranca.valorNegociadoAPagar}</td>
                    <td>{cobranca.dataDoRetorno}</td>
                    <td className={`break-all`}>{cobranca.anotacaoCobranca}</td>
                </tr>
            )
        });
    }

    return (
        <table className={`w-full`}>
            <thead className={`border-b-2 border-black w-screen`}>{renderizarCabecalho()}</thead>
            <tbody>{renderizarDados()}</tbody>
        </table>
    )
}

export default TabelaCobranca;
