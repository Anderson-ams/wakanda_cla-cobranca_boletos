import Cliente from "../../../core/ClienteCore/Cliente";

interface TabelaPropsCliente {
  clientes: Cliente[];
  children?: any;
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

function TabelaCliente(props: TabelaPropsCliente) {
  const exibirAcoes = props.clienteSelecionado;
  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr key={cliente.telefoneCliente}>
          {cliente.nomeCliente} - {cliente.telefoneCliente}{" "}
          {exibirAcoes ? renderizarAcoes(cliente) : false}
        </tr>
      );
    });
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td>
        {" "}
        {exibirAcoes ? (
          props.clienteSelecionado ? (
            <button
              onClick={() => props.clienteSelecionado?.(cliente)}
              className={`ml-6 w-20 h-6 text-center text-xs`}
            >
              EDITAR
            </button>
          ) : (
            false
          )
        ) : (
          false
        )}
      </td>
    );
  }
  return <table>{renderizarDados()}</table>;
}

export default TabelaCliente;
