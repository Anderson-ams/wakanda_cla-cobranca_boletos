
export default interface IAgregadosDeClientes {
     find(arg0: (pi: any) => boolean): never
     nomeCliente?: string
     telefone?: string
     documento?: string
     parcela?: string
     saldoDevedor?: number
     dataVencimento?:  Date | null 
     valorNegociado?: number
     anotacao?: string
     dataDeRetorno?: string
}