import React from "react";
import Boleto from "../../core/BoletoCore/Boleto";
import Cliente from "../../core/ClienteCore/Cliente";
import Cobranca from "../../core/CobrancaCore/Conbranca";

interface TabelaPropsCobranca {
    cobranca: Cobranca[];
}

function TabelaCobranca(props: /*Props*/ TabelaPropsCobranca) {
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
    // function renderizarDados() {
    //     return props.cobranca?.map();
    // }

    return (
        <table>
            {renderizarCabecalho()}
        </table>
    )
}

export default TabelaCobranca;
